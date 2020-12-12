const textyText = document.querySelector("#text");
const input = document.querySelector("#theInput");
const rule = CSSRulePlugin.getRule("#text:before");
const face = document.querySelector("#face");
const mouth = document.querySelector("#mouth");
let isRunning = false;

export function vacuum() {
  if (!isRunning) {
    isRunning = true;
    textyText.textContent = input.value;
    input.style.display = "none";
    textyText.style.display = "block";

    TweenMax.to(face, 0.75, {
      x: 75,
      ease: Power2.easeInOut,
    });

    TweenMax.to(mouth, 0.5, {
      delay: 0.5,
      height: "33%",
      ease: Power2.easeInOut,
    });

    TweenMax.to(rule, 0.75, {
      cssRule: { transform: "rotateZ(125deg)" },
      ease: Elastic.easeInOut,
    });

    let chars = Splitting({ target: textyText, by: "chars" })[0].chars;

    let delay = 1.25;
    for (c of chars) {
      TweenMax.to(c, 1, {
        display: "inline-block",
        x: "-1000px",
        delay,
        ease: Power2.easeInOut,
      });

      delay += 0.1;
    }

    TweenMax.to(face, 0.75, {
      x: 0,
      delay: 3,
      ease: Power2.easeInOut,
    });

    TweenMax.to(mouth, 0.75, {
      height: 0,
      delay: 3,
      ease: Power2.easeInOut,
    });

    TweenMax.to(rule, 0.75, {
      cssRule: { transform: "rotateZ(0deg)" },
      ease: Elastic.easeInOut,
      delay: 3,
      onComplete: function () {
        textyText.textContent = "";
        input.value = "";
        input.style.display = "block";
        textyText.style.display = "none";
        isRunning = false;
      },
    });
  }
}
