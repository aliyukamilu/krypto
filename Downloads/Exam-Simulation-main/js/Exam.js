let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let tabs = document.querySelectorAll(".nav-link");
let pressQ = document.getElementsByClassName("number");

function removeLoader() {
  $("#loading").hide();
  $("#load").hide();
}
let counterr;

async function getExamId() {
  const response = await fetch(
    `https://steamledge.com/blueberry/php2/?getExamTheoryId&mode=math&content=waec`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    alert("An Error Occured");
  }

  const questionsId = await response.json();
  removeLoader();

  let asideoCount = document.querySelector(".nav-pills");
  for (let i = 0; i < questionsId.length; i++) {
    removeLoader();
    asideoCount.innerHTML += `
            <li class="nav-item" role="presentation">
            <button class="nav-link number" id="Q${i + 1
      }" data-bs-toggle="pill" data-qid="${questionsId[i]
      }" data-bs-target="#Q${i + 1}" type="button" role="tab"></button>
            </li> 
        `;
  }
  prev.addEventListener("click", (e) => {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].classList.contains("active")) {
        tabs[i - 1].click();
        break;
      }
    }
  });
  next.addEventListener("click", (e) => {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].classList.contains("active")) {
        tabs[i + 1].click();
        break;
      }
    }
  });
  for (let i = 0; i < pressQ.length; i++) {
    pressQ[i].addEventListener("click", function () {
      $("body").append(`<div id="loading" class="loading">
        <img src="img/load/loader.gif" alt="" class="loading-image">
      </div>`);

      // progressbarIncrement()
      // console.log(pressQ[i])
      let thisIId = pressQ[i].dataset.qid;
      async function getExamNumber() {
        const response = await fetch(
          `https://steamledge.com/blueberry/php2/?getExam&q_id=${thisIId}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          alert("An Error Occured");
        }

        let questionsNumber = await response.json();
        console.log(questionsNumber);
        removeLoader();

        // console.log(questionsNumber);
        let getNestedElement = "";
        let zaOptions
        for (let keyQuestion in questionsNumber) {
          if (keyQuestion == 0) {
            zaOptions = questionsNumber[keyQuestion];
          }
          if (keyQuestion == 1) {
            if (Object.hasOwnProperty.call(questionsNumber, keyQuestion)) {
              const element = questionsNumber[keyQuestion];
              console.log(element);

              let theOption = Object.keys(element);
              let theQuestion = Object.values(element);
              console.log(theOption, theQuestion);

              for (const key in element) {
                getNestedElement += `
                <div class="accordion-item">
                  <a href="#" class="heading">
                      <div class="icon"></div>
                      <div class="title">${key}</div>
                  </a>
          
                  <div class="content">
                    <div class="container">
                    <div class="row mb-3">
                      <div class="col-lg-8 col-9">
                        <div class="Thequestion">${element[key]}</div>
                      </div>
                      <div class="col-lg-4 col-3">
                        <div class="question-imag" >
                          <img src="img/courseimg/2d.gif" width="100%" alt="" style="border-radius: 10px;" class="imag">
                        </div>
                      </div>
                    </div>
                    <div class="row mt-4 pb-4">
                      <div class="col-lg-8 col-12">

                      <p class="opt">
                             <span class="opt-let">1</span>
                             <span>fgkjhnsrdlgnsrod.</span>
                           </p>
                           </div>
                           </div>
                       </div>
                       </div>
                     </div>

                    `
              }

              theOption.forEach((opt, index) => {
                //   getNestedElement += `
                // <div class="accordion-item">
                //     <a href="#" class="heading">
                //         <div class="icon"></div>
                //         <div class="title">${opt}</div>
                //     </a>

                //     <div class="content">
                //       <div class="container">
                //       <div class="row mb-3">
                //         <div class="col-lg-8 col-9">
                //           <div class="Thequestion">${theQuestion[index]}</div>
                //         </div>
                //         <div class="col-lg-4 col-3">
                //           <div class="question-imag" >
                //             <img src="img/courseimg/2d.gif" width="100%" alt="" style="border-radius: 10px;" class="imag">
                //           </div>
                //         </div>
                //       </div>
                //       <div class="row mt-4 pb-4">
                //         <div class="col-lg-8 col-12">
                //       ` 

                // for (const key2 in zaOptions) {
                //   if (Object.hasOwnProperty.call(zaOptions, key2)) {
                //     const element2 = zaOptions[key2];

                //     let options = Object.values(element2)[0].actual
                //     options.map((opti, iii) => {
                //       getNestedElement+=`
                //         <p class="opt">
                //             <span class="opt-let">${iii + 1}</span>
                //             <span>${opti}.</span>
                //           </p>
                //       `
                //     })
                //   }
                // }


                //     getNestedElement += `
                //         </div>
                //       </div>
                //   </div>
                //   </div>
                // </div>
                //   `;
              });

              $("#theAcord").html(getNestedElement);
              accordion()
              // for (const keyQuestion1 in element) {
              //   if (Object.hasOwnProperty.call(element, keyQuestion1)) {
              //     const element2 = element[keyQuestion1];

              //     document.querySelector(
              //       `.accordion[data-ul='${pressQ[i].dataset.quescount}']`
              //     ).innerHTML += `
              //     <div class="accordion-item" liList" data-getQuestionFromArray="${keyQuestion1}">${keyQuestion1}</li>
              //     `;
              //     document
              //       .querySelectorAll(".accordion-item.liList")
              //       .forEach((lili) => {

              //         lili.addEventListener("click", () => {
              //           let thePapa = questionsNumber[0][lili.textContent];
              //           // let Question = (Object.values(workings))
              //           let theAnswersArray =
              //             Object.values(thePapa)[0].actual;
              //           // console.log(theAnswersArray)
              //           // function shuffle(theAnswersArray) {
              //           //   let currentIndex = theAnswersArray.length,
              //           //     randomIndex;

              //           //   // While there remain elements to shuffle...
              //           //   while (currentIndex != 0) {
              //           //     // Pick a remaining element...
              //           //     randomIndex = Math.floor(
              //           //       Math.random() * currentIndex
              //           //     );
              //           //     currentIndex--;

              //           //     [
              //           //       theAnswersArray[currentIndex],
              //           //       theAnswersArray[randomIndex],
              //           //     ] = [
              //           //       theAnswersArray[randomIndex],
              //           //       theAnswersArray[currentIndex],
              //           //     ];
              //           //   }

              //           //   return theAnswersArray;
              //           // }
              //           // shuffle(theAnswersArray);

              //           // let asideoCount = document.querySelector(".options");
              //           // let down = document.querySelector(".canval");
              //           // asideoCount.innerHTML = "";
              //           // down.innerHTML = "";
              //           // for (let i = 0; i < theAnswersArray.length; i++) {
              //           //   asideoCount.innerHTML += `
              //           //   <div class="card mb-3 latex" data-target="T" data-cardid="${i}" draggable="true">
              //           //     <div class="card-body">
              //           //     ${theAnswersArray[i]}
              //           //     </div>
              //           //   </div> `;

              //           // }
              //           let theQuestion = element[lili.textContent];
              //           qustionnn.innerHTML = theQuestion;
              //         });
              //       });

              //   }
              // }
            }
          }
        }
      }

      getExamNumber();
    });
  }
}
getExamId();

function accordion() {
  $(".accordion-item .heading").on("click", function (e) {
    e.preventDefault();

    // Add the correct active class
    if ($(this).closest(".accordion-item").hasClass("active")) {
      // Remove active classes
      $(".accordion-item").removeClass("active");
    } else {
      // Remove active classes
      $(".accordion-item").removeClass("active");

      // Add the active class
      $(this).closest(".accordion-item").addClass("active");
    }

    // Show the content
    var $content = $(this).next();
    $content.slideToggle(100);
    $(".accordion-item .content").not($content).slideUp("fast");
  });
}
