@charset "UTF-8";

/* 
    Document   : Animated.css custom build
    Creadit: https://daneden.me/animate/
*/

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
}

@-webkit-keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

@keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

.flash {
  -webkit-animation-name: flash;
  animation-name: flash;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
}

.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
}

@-webkit-keyframes rubberBand {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  30% {
    -webkit-transform: scaleX(1.25) scaleY(0.75);
    transform: scaleX(1.25) scaleY(0.75);
  }

  40% {
    -webkit-transform: scaleX(0.75) scaleY(1.25);
    transform: scaleX(0.75) scaleY(1.25);
  }

  60% {
    -webkit-transform: scaleX(1.15) scaleY(0.85);
    transform: scaleX(1.15) scaleY(0.85);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes rubberBand {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  30% {
    -webkit-transform: scaleX(1.25) scaleY(0.75);
    -ms-transform: scaleX(1.25) scaleY(0.75);
    transform: scaleX(1.25) scaleY(0.75);
  }

  40% {
    -webkit-transform: scaleX(0.75) scaleY(1.25);
    -ms-transform: scaleX(0.75) scaleY(1.25);
    transform: scaleX(0.75) scaleY(1.25);
  }

  60% {
    -webkit-transform: scaleX(1.15) scaleY(0.85);
    -ms-transform: scaleX(1.15) scaleY(0.85);
    transform: scaleX(1.15) scaleY(0.85);
  }

  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
}

.rubberBand {
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
}

@-webkit-keyframes shake {
  0%, 100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
}

@keyframes shake {
  0%, 100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translateX(10px);
    -ms-transform: translateX(10px);
    transform: translateX(10px);
  }
}

.shake {
  -webkit-animation-name: shake;
  animation-name: shake;
}

@-webkit-keyframes swing {
  20% {
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  40% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  60% {
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
  }

  80% {
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@keyframes swing {
  20% {
    -webkit-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  40% {
    -webkit-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  60% {
    -webkit-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    transform: rotate(5deg);
  }

  80% {
    -webkit-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

.swing {
  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-name: swing;
  animation-name: swing;
}

@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  10%, 20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }

  100% {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

@keyframes tada {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  10%, 20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    -ms-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    -ms-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    -ms-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }

  100% {
    -webkit-transform: scale(1) rotate(0);
    -ms-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

.tada {
  -webkit-animation-name: tada;
  animation-name: tada;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes wobble {
  0% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }

  15% {
    -webkit-transform: translateX(-25%) rotate(-5deg);
    transform: translateX(-25%) rotate(-5deg);
  }

  30% {
    -webkit-transform: translateX(20%) rotate(3deg);
    transform: translateX(20%) rotate(3deg);
  }

  45% {
    -webkit-transform: translateX(-15%) rotate(-3deg);
    transform: translateX(-15%) rotate(-3deg);
  }

  60% {
    -webkit-transform: translateX(10%) rotate(2deg);
    transform: translateX(10%) rotate(2deg);
  }

  75% {
    -webkit-transform: translateX(-5%) rotate(-1deg);
    transform: translateX(-5%) rotate(-1deg);
  }

  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}

@keyframes wobble {
  0% {
    -webkit-transform: translateX(0%);
    -ms-transform: translateX(0%);
    transform: translateX(0%);
  }

  15% {
    -webkit-transform: translateX(-25%) rotate(-5deg);
    -ms-transform: translateX(-25%) rotate(-5deg);
    transform: translateX(-25%) rotate(-5deg);
  }

  30% {
    -webkit-transform: translateX(20%) rotate(3deg);
    -ms-transform: translateX(20%) rotate(3deg);
    transform: translateX(20%) rotate(3deg);
  }

  45% {
    -webkit-transform: translateX(-15%) rotate(-3deg);
    -ms-transform: translateX(-15%) rotate(-3deg);
    transform: translateX(-15%) rotate(-3deg);
  }

  60% {
    -webkit-transform: translateX(10%) rotate(2deg);
    -ms-transform: translateX(10%) rotate(2deg);
    transform: translateX(10%) rotate(2deg);
  }

  75% {
    -webkit-transform: translateX(-5%) rotate(-1deg);
    -ms-transform: translateX(-5%) rotate(-1deg);
    transform: translateX(-5%) rotate(-1deg);
  }

  100% {
    -webkit-transform: translateX(0%);
    -ms-transform: translateX(0%);
    transform: translateX(0%);
  }
}

.wobble {
  -webkit-animation-name: wobble;
  animation-name: wobble;
}

@-webkit-keyframes bounceIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(.3);
    transform: scale(.3);
  }

  50% {
    opacity: 1;
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }

  70% {
    -webkit-transform: scale(.9);
    transform: scale(.9);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(.3);
    -ms-transform: scale(.3);
    transform: scale(.3);
  }

  50% {
    opacity: 1;
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }

  70% {
    -webkit-transform: scale(.9);
    -ms-transform: scale(.9);
    transform: scale(.9);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
}

.bounceIn {
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}

@-webkit-keyframes bounceInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }

  80% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes bounceInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateY(30px);
    -ms-transform: translateY(30px);
    transform: translateY(30px);
  }

  80% {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.bounceInDown {
  -webkit-animation-name: bounceInDown;
  animation-name: bounceInDown;
}

@-webkit-keyframes bounceInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
  }

  80% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes bounceInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateX(30px);
    -ms-transform: translateX(30px);
    transform: translateX(30px);
  }

  80% {
    -webkit-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}

@-webkit-keyframes bounceInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateX(-30px);
    transform: translateX(-30px);
  }

  80% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes bounceInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateX(-30px);
    -ms-transform: translateX(-30px);
    transform: translateX(-30px);
  }

  80% {
    -webkit-transform: translateX(10px);
    -ms-transform: translateX(10px);
    transform: translateX(10px);
  }

  100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}

@-webkit-keyframes bounceInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    transform: translateY(2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  80% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes bounceInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    transform: translateY(2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  80% {
    -webkit-transform: translateY(10px);
    -ms-transform: translateY(10px);
    transform: translateY(10px);
  }

  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}

@-webkit-keyframes bounceOut {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  25% {
    -webkit-transform: scale(.95);
    transform: scale(.95);
  }

  50% {
    opacity: 1;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(.3);
    transform: scale(.3);
  }
}

@keyframes bounceOut {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  25% {
    -webkit-transform: scale(.95);
    -ms-transform: scale(.95);
    transform: scale(.95);
  }

  50% {
    opacity: 1;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(.3);
    -ms-transform: scale(.3);
    transform: scale(.3);
  }
}

.bounceOut {
  -webkit-animation-name: bounceOut;
  animation-name: bounceOut;
}

@-webkit-keyframes bounceOutDown {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}

@keyframes bounceOutDown {
  0% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}

.bounceOutDown {
  -webkit-animation-name: bounceOutDown;
  animation-name: bounceOutDown;
}

@-webkit-keyframes bounceOutLeft {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

@keyframes bounceOutLeft {
  0% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

.bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
}

@-webkit-keyframes bounceOutRight {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

@keyframes bounceOutRight {
  0% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

.bounceOutRight {
  -webkit-animation-name: bounceOutRight;
  animation-name: bounceOutRight;
}

@-webkit-keyframes bounceOutUp {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

@keyframes bounceOutUp {
  0% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

.bounceOutUp {
  -webkit-animation-name: bounceOutUp;
  animation-name: bounceOutUp;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

@-webkit-keyframes fadeInDownBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInDownBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.fadeInDownBig {
  -webkit-animation-name: fadeInDownBig;
  animation-name: fadeInDownBig;
}

@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

@-webkit-keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.fadeInLeftBig {
  -webkit-animation-name: fadeInLeftBig;
  animation-name: fadeInLeftBig;
}

@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

@-webkit-keyframes fadeInRightBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes fadeInRightBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.fadeInRightBig {
  -webkit-animation-name: fadeInRightBig;
  animation-name: fadeInRightBig;
}

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

@-webkit-keyframes fadeInUpBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    transform: translateY(2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInUpBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    transform: translateY(2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.fadeInUpBig {
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@-webkit-keyframes fadeOutDown {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
}

@keyframes fadeOutDown {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }
}

.fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}

@-webkit-keyframes fadeOutDownBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}

@keyframes fadeOutDownBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}

.fadeOutDownBig {
  -webkit-animation-name: fadeOutDownBig;
  animation-name: fadeOutDownBig;
}

@-webkit-keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }
}

@keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    transform: translateX(-20px);
  }
}

.fadeOutLeft {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

@-webkit-keyframes fadeOutLeftBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

@keyframes fadeOutLeftBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

.fadeOutLeftBig {
  -webkit-animation-name: fadeOutLeftBig;
  animation-name: fadeOutLeftBig;
}

@-webkit-keyframes fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
}

@keyframes fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
}

.fadeOutRight {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}

@-webkit-keyframes fadeOutRightBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

@keyframes fadeOutRightBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

.fadeOutRightBig {
  -webkit-animation-name: fadeOutRightBig;
  animation-name: fadeOutRightBig;
}

@-webkit-keyframes fadeOutUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}

@keyframes fadeOutUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}

.fadeOutUp {
  -webkit-animation-name: fadeOutUp;
  animation-name: fadeOutUp;
}

@-webkit-keyframes fadeOutUpBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

@keyframes fadeOutUpBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

.fadeOutUpBig {
  -webkit-animation-name: fadeOutUpBig;
  animation-name: fadeOutUpBig;
}

@-webkit-keyframes flip {
  0% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
    transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);
    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  100% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

@keyframes flip {
  0% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
    -ms-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
    transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
    -ms-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -ms-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);
    -ms-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);
    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  100% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
    -ms-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

.animated.flip {
  -webkit-backface-visibility: visible;
  -ms-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: flip;
  animation-name: flip;
}

@-webkit-keyframes flipInX {
  0% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotateX(-10deg);
    transform: perspective(400px) rotateX(-10deg);
  }

  70% {
    -webkit-transform: perspective(400px) rotateX(10deg);
    transform: perspective(400px) rotateX(10deg);
  }

  100% {
    -webkit-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
}

@keyframes flipInX {
  0% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotateX(-10deg);
    -ms-transform: perspective(400px) rotateX(-10deg);
    transform: perspective(400px) rotateX(-10deg);
  }

  70% {
    -webkit-transform: perspective(400px) rotateX(10deg);
    -ms-transform: perspective(400px) rotateX(10deg);
    transform: perspective(400px) rotateX(10deg);
  }

  100% {
    -webkit-transform: perspective(400px) rotateX(0deg);
    -ms-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
}

.flipInX {
  -webkit-backface-visibility: visible !important;
  -ms-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}

@-webkit-keyframes flipInY {
  0% {
    -webkit-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotateY(-10deg);
    transform: perspective(400px) rotateY(-10deg);
  }

  70% {
    -webkit-transform: perspective(400px) rotateY(10deg);
    transform: perspective(400px) rotateY(10deg);
  }

  100% {
    -webkit-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
}

@keyframes flipInY {
  0% {
    -webkit-transform: perspective(400px) rotateY(90deg);
    -ms-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotateY(-10deg);
    -ms-transform: perspective(400px) rotateY(-10deg);
    transform: perspective(400px) rotateY(-10deg);
  }

  70% {
    -webkit-transform: perspective(400px) rotateY(10deg);
    -ms-transform: perspective(400px) rotateY(10deg);
    transform: perspective(400px) rotateY(10deg);
  }

  100% {
    -webkit-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
}

.flipInY {
  -webkit-backface-visibility: visible !important;
  -ms-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInY;
  animation-name: flipInY;
}

@-webkit-keyframes flipOutX {
  0% {
    -webkit-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
}

@keyframes flipOutX {
  0% {
    -webkit-transform: perspective(400px) rotateX(0deg);
    -ms-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
}

.flipOutX {
  -webkit-animation-name: flipOutX;
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  -ms-backface-visibility: visible !important;
  backface-visibility: visible !important;
}

@-webkit-keyframes flipOutY {
  0% {
    -webkit-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
}

@keyframes flipOutY {
  0% {
    -webkit-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(400px) rotateY(90deg);
    -ms-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
}

.flipOutY {
  -webkit-backface-visibility: visible !important;
  -ms-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipOutY;
  animation-name: flipOutY;
}

@-webkit-keyframes lightSpeedIn {
  0% {
    -webkit-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: translateX(-20%) skewX(30deg);
    transform: translateX(-20%) skewX(30deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: translateX(0%) skewX(-15deg);
    transform: translateX(0%) skewX(-15deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }
}

@keyframes lightSpeedIn {
  0% {
    -webkit-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: translateX(-20%) skewX(30deg);
    -ms-transform: translateX(-20%) skewX(30deg);
    transform: translateX(-20%) skewX(30deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: translateX(0%) skewX(-15deg);
    -ms-transform: translateX(0%) skewX(-15deg);
    transform: translateX(0%) skewX(-15deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }
}

.lightSpeedIn {
  -webkit-animation-name: lightSpeedIn;
  animation-name: lightSpeedIn;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}

@-webkit-keyframes lightSpeedOut {
  0% {
    -webkit-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }
}

@keyframes lightSpeedOut {
  0% {
    -webkit-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }
}

.lightSpeedOut {
  -webkit-animation-name: lightSpeedOut;
  animation-name: lightSpeedOut;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
}

@-webkit-keyframes rotateIn {
  0% {
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(-200deg);
    transform: rotate(-200deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

@keyframes rotateIn {
  0% {
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(-200deg);
    -ms-transform: rotate(-200deg);
    transform: rotate(-200deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

.rotateIn {
  -webkit-animation-name: rotateIn;
  animation-name: rotateIn;
}

@-webkit-keyframes rotateInDownLeft {
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

@keyframes rotateInDownLeft {
  0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

.rotateInDownLeft {
  -webkit-animation-name: rotateInDownLeft;
  animation-name: rotateInDownLeft;
}

@-webkit-keyframes rotateInDownRight {
  0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

@keyframes rotateInDownRight {
  0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

.rotateInDownRight {
  -webkit-animation-name: rotateInDownRight;
  animation-name: rotateInDownRight;
}

@-webkit-keyframes rotateInUpLeft {
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

@keyframes rotateInUpLeft {
  0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

.rotateInUpLeft {
  -webkit-animation-name: rotateInUpLeft;
  animation-name: rotateInUpLeft;
}

@-webkit-keyframes rotateInUpRight {
  0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

@keyframes rotateInUpRight {
  0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

.rotateInUpRight {
  -webkit-animation-name: rotateInUpRight;
  animation-name: rotateInUpRight;
}

@-webkit-keyframes rotateOut {
  0% {
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(200deg);
    transform: rotate(200deg);
    opacity: 0;
  }
}

@keyframes rotateOut {
  0% {
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(200deg);
    -ms-transform: rotate(200deg);
    transform: rotate(200deg);
    opacity: 0;
  }
}

.rotateOut {
  -webkit-animation-name: rotateOut;
  animation-name: rotateOut;
}

@-webkit-keyframes rotateOutDownLeft {
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }
}

@keyframes rotateOutDownLeft {
  0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }
}

.rotateOutDownLeft {
  -webkit-animation-name: rotateOutDownLeft;
  animation-name: rotateOutDownLeft;
}

@-webkit-keyframes rotateOutDownRight {
  0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }
}

@keyframes rotateOutDownRight {
  0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }
}

.rotateOutDownRight {
  -webkit-animation-name: rotateOutDownRight;
  animation-name: rotateOutDownRight;
}

@-webkit-keyframes rotateOutUpLeft {
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }
}

@keyframes rotateOutUpLeft {
  0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }
}

.rotateOutUpLeft {
  -webkit-animation-name: rotateOutUpLeft;
  animation-name: rotateOutUpLeft;
}

@-webkit-keyframes rotateOutUpRight {
  0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }
}

@keyframes rotateOutUpRight {
  0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }
}

.rotateOutUpRight {
  -webkit-animation-name: rotateOutUpRight;
  animation-name: rotateOutUpRight;
}

@-webkit-keyframes slideInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
}

@-webkit-keyframes slideInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}

@-webkit-keyframes slideInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}

@-webkit-keyframes slideOutLeft {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

@keyframes slideOutLeft {
  0% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

.slideOutLeft {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
}

@-webkit-keyframes slideOutRight {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

@keyframes slideOutRight {
  0% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

.slideOutRight {
  -webkit-animation-name: slideOutRight;
  animation-name: slideOutRight;
}

@-webkit-keyframes slideOutUp {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

@keyframes slideOutUp {
  0% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

.slideOutUp {
  -webkit-animation-name: slideOutUp;
  animation-name: slideOutUp;
}

@-webkit-keyframes hinge {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%, 60% {
    -webkit-transform: rotate(80deg);
    transform: rotate(80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40% {
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  80% {
    -webkit-transform: rotate(60deg) translateY(0);
    transform: rotate(60deg) translateY(0);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  100% {
    -webkit-transform: translateY(700px);
    transform: translateY(700px);
    opacity: 0;
  }
}

@keyframes hinge {
  0% {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%, 60% {
    -webkit-transform: rotate(80deg);
    -ms-transform: rotate(80deg);
    transform: rotate(80deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40% {
    -webkit-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    transform: rotate(60deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  80% {
    -webkit-transform: rotate(60deg) translateY(0);
    -ms-transform: rotate(60deg) translateY(0);
    transform: rotate(60deg) translateY(0);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  100% {
    -webkit-transform: translateY(700px);
    -ms-transform: translateY(700px);
    transform: translateY(700px);
    opacity: 0;
  }
}

.hinge {
  -webkit-animation-name: hinge;
  animation-name: hinge;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%) rotate(-120deg);
    transform: translateX(-100%) rotate(-120deg);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
}

@keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%) rotate(-120deg);
    -ms-transform: translateX(-100%) rotate(-120deg);
    transform: translateX(-100%) rotate(-120deg);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    -ms-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
}

.rollIn {
  -webkit-animation-name: rollIn;
  animation-name: rollIn;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) rotate(120deg);
    transform: translateX(100%) rotate(120deg);
  }
}

@keyframes rollOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    -ms-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) rotate(120deg);
    -ms-transform: translateX(100%) rotate(120deg);
    transform: translateX(100%) rotate(120deg);
  }
}

.rollOut {
  -webkit-animation-name: rollOut;
  animation-name: rollOut;
}
/*
    Colorbox Core Style:
    The following CSS is consistent between example themes and should not be altered.
*/
#colorbox, #cboxOverlay, #cboxWrapper{position:absolute; top:0; left:0; z-index:9999; overflow:hidden;}
#cboxWrapper {max-width:none;}
#cboxOverlay{position:fixed; width:100%; height:100%;}
#cboxMiddleLeft, #cboxBottomLeft{clear:left;}
#cboxContent{position:relative;}
#cboxLoadedContent{overflow:auto; -webkit-overflow-scrolling: touch;}
#cboxTitle{margin:0;}
#cboxLoadingOverlay, #cboxLoadingGraphic{position:absolute; top:0; left:0; width:100%; height:100%;}
#cboxPrevious, #cboxNext, #cboxClose, #cboxSlideshow{cursor:pointer;}
.cboxPhoto{float:left; margin:auto; border:0; display:block; max-width:none; -ms-interpolation-mode:bicubic;}
.cboxIframe{width:100%; height:100%; display:block; border:0;}
#colorbox, #cboxContent, #cboxLoadedContent{box-sizing:content-box; -moz-box-sizing:content-box; -webkit-box-sizing:content-box;}

/* 
    User Style:
    Change the following styles to modify the appearance of Colorbox.  They are
    ordered & tabbed in a way that represents the nesting of the generated HTML.
*/
#cboxOverlay{background:#000;}
#colorbox{outline:0;}
    #cboxContent{margin-top:20px;background:#000;}
        .cboxIframe{background:#fff;}
        #cboxError{padding:50px; border:1px solid #ccc;}
        #cboxLoadedContent{border:5px solid #000; background:#fff;}
        #cboxTitle{position:absolute; top:-20px; left:0; color:#ccc;}
        #cboxCurrent{position:absolute; top:-20px; right:0px; color:#ccc;}
        #cboxLoadingGraphic{background:url(images/loading.gif) no-repeat center center;}

        /* these elements are buttons, and may need to have additional styles reset to avoid unwanted base styles */
        #cboxPrevious, #cboxNext, #cboxSlideshow, #cboxClose {border:0; padding:0; margin:0; overflow:visible; width:auto; background:none; }
        
        /* avoid outlines on :active (mouseclick), but preserve outlines on :focus (tabbed navigating) */
        #cboxPrevious:active, #cboxNext:active, #cboxSlideshow:active, #cboxClose:active {outline:0;}
        
        #cboxSlideshow{position:absolute; top:-20px; right:90px; color:#fff;}
        #cboxPrevious{position:absolute; top:50%; left:5px; margin-top:-32px; background:url(images/controls.png) no-repeat top left; width:28px; height:65px; text-indent:-9999px;}
        #cboxPrevious:hover{background-position:bottom left;}
        #cboxNext{position:absolute; top:50%; right:5px; margin-top:-32px; background:url(images/controls.png) no-repeat top right; width:28px; height:65px; text-indent:-9999px;}
        #cboxNext:hover{background-position:bottom right;}
        #cboxClose{position:absolute; top:5px; right:5px; display:block; background:url(images/controls.png) no-repeat top center; width:38px; height:19px; text-indent:-9999px;}
        #cboxClose:hover{background-position:bottom center;}
/*!
 *  Font Awesome 4.2.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */@font-face{font-family:'FontAwesome';src:url('../fonts/fontawesome-webfont.eot?v=4.2.0');src:url('../fonts/fontawesome-webfont.eot?#iefix&v=4.2.0') format('embedded-opentype'),url('../fonts/fontawesome-webfont.woff?v=4.2.0') format('woff'),url('../fonts/fontawesome-webfont.ttf?v=4.2.0') format('truetype'),url('../fonts/fontawesome-webfont.svg?v=4.2.0#fontawesomeregular') format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\f000"}.fa-music:before{content:"\f001"}.fa-search:before{content:"\f002"}.fa-envelope-o:before{content:"\f003"}.fa-heart:before{content:"\f004"}.fa-star:before{content:"\f005"}.fa-star-o:before{content:"\f006"}.fa-user:before{content:"\f007"}.fa-film:before{content:"\f008"}.fa-th-large:before{content:"\f009"}.fa-th:before{content:"\f00a"}.fa-th-list:before{content:"\f00b"}.fa-check:before{content:"\f00c"}.fa-remove:before,.fa-close:before,.fa-times:before{content:"\f00d"}.fa-search-plus:before{content:"\f00e"}.fa-search-minus:before{content:"\f010"}.fa-power-off:before{content:"\f011"}.fa-signal:before{content:"\f012"}.fa-gear:before,.fa-cog:before{content:"\f013"}.fa-trash-o:before{content:"\f014"}.fa-home:before{content:"\f015"}.fa-file-o:before{content:"\f016"}.fa-clock-o:before{content:"\f017"}.fa-road:before{content:"\f018"}.fa-download:before{content:"\f019"}.fa-arrow-circle-o-down:before{content:"\f01a"}.fa-arrow-circle-o-up:before{content:"\f01b"}.fa-inbox:before{content:"\f01c"}.fa-play-circle-o:before{content:"\f01d"}.fa-rotate-right:before,.fa-repeat:before{content:"\f01e"}.fa-refresh:before{content:"\f021"}.fa-list-alt:before{content:"\f022"}.fa-lock:before{content:"\f023"}.fa-flag:before{content:"\f024"}.fa-headphones:before{content:"\f025"}.fa-volume-off:before{content:"\f026"}.fa-volume-down:before{content:"\f027"}.fa-volume-up:before{content:"\f028"}.fa-qrcode:before{content:"\f029"}.fa-barcode:before{content:"\f02a"}.fa-tag:before{content:"\f02b"}.fa-tags:before{content:"\f02c"}.fa-book:before{content:"\f02d"}.fa-bookmark:before{content:"\f02e"}.fa-print:before{content:"\f02f"}.fa-camera:before{content:"\f030"}.fa-font:before{content:"\f031"}.fa-bold:before{content:"\f032"}.fa-italic:before{content:"\f033"}.fa-text-height:before{content:"\f034"}.fa-text-width:before{content:"\f035"}.fa-align-left:before{content:"\f036"}.fa-align-center:before{content:"\f037"}.fa-align-right:before{content:"\f038"}.fa-align-justify:before{content:"\f039"}.fa-list:before{content:"\f03a"}.fa-dedent:before,.fa-outdent:before{content:"\f03b"}.fa-indent:before{content:"\f03c"}.fa-video-camera:before{content:"\f03d"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:"\f03e"}.fa-pencil:before{content:"\f040"}.fa-map-marker:before{content:"\f041"}.fa-adjust:before{content:"\f042"}.fa-tint:before{content:"\f043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\f044"}.fa-share-square-o:before{content:"\f045"}.fa-check-square-o:before{content:"\f046"}.fa-arrows:before{content:"\f047"}.fa-step-backward:before{content:"\f048"}.fa-fast-backward:before{content:"\f049"}.fa-backward:before{content:"\f04a"}.fa-play:before{content:"\f04b"}.fa-pause:before{content:"\f04c"}.fa-stop:before{content:"\f04d"}.fa-forward:before{content:"\f04e"}.fa-fast-forward:before{content:"\f050"}.fa-step-forward:before{content:"\f051"}.fa-eject:before{content:"\f052"}.fa-chevron-left:before{content:"\f053"}.fa-chevron-right:before{content:"\f054"}.fa-plus-circle:before{content:"\f055"}.fa-minus-circle:before{content:"\f056"}.fa-times-circle:before{content:"\f057"}.fa-check-circle:before{content:"\f058"}.fa-question-circle:before{content:"\f059"}.fa-info-circle:before{content:"\f05a"}.fa-crosshairs:before{content:"\f05b"}.fa-times-circle-o:before{content:"\f05c"}.fa-check-circle-o:before{content:"\f05d"}.fa-ban:before{content:"\f05e"}.fa-arrow-left:before{content:"\f060"}.fa-arrow-right:before{content:"\f061"}.fa-arrow-up:before{content:"\f062"}.fa-arrow-down:before{content:"\f063"}.fa-mail-forward:before,.fa-share:before{content:"\f064"}.fa-expand:before{content:"\f065"}.fa-compress:before{content:"\f066"}.fa-plus:before{content:"\f067"}.fa-minus:before{content:"\f068"}.fa-asterisk:before{content:"\f069"}.fa-exclamation-circle:before{content:"\f06a"}.fa-gift:before{content:"\f06b"}.fa-leaf:before{content:"\f06c"}.fa-fire:before{content:"\f06d"}.fa-eye:before{content:"\f06e"}.fa-eye-slash:before{content:"\f070"}.fa-warning:before,.fa-exclamation-triangle:before{content:"\f071"}.fa-plane:before{content:"\f072"}.fa-calendar:before{content:"\f073"}.fa-random:before{content:"\f074"}.fa-comment:before{content:"\f075"}.fa-magnet:before{content:"\f076"}.fa-chevron-up:before{content:"\f077"}.fa-chevron-down:before{content:"\f078"}.fa-retweet:before{content:"\f079"}.fa-shopping-cart:before{content:"\f07a"}.fa-folder:before{content:"\f07b"}.fa-folder-open:before{content:"\f07c"}.fa-arrows-v:before{content:"\f07d"}.fa-arrows-h:before{content:"\f07e"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\f080"}.fa-twitter-square:before{content:"\f081"}.fa-facebook-square:before{content:"\f082"}.fa-camera-retro:before{content:"\f083"}.fa-key:before{content:"\f084"}.fa-gears:before,.fa-cogs:before{content:"\f085"}.fa-comments:before{content:"\f086"}.fa-thumbs-o-up:before{content:"\f087"}.fa-thumbs-o-down:before{content:"\f088"}.fa-star-half:before{content:"\f089"}.fa-heart-o:before{content:"\f08a"}.fa-sign-out:before{content:"\f08b"}.fa-linkedin-square:before{content:"\f08c"}.fa-thumb-tack:before{content:"\f08d"}.fa-external-link:before{content:"\f08e"}.fa-sign-in:before{content:"\f090"}.fa-trophy:before{content:"\f091"}.fa-github-square:before{content:"\f092"}.fa-upload:before{content:"\f093"}.fa-lemon-o:before{content:"\f094"}.fa-phone:before{content:"\f095"}.fa-square-o:before{content:"\f096"}.fa-bookmark-o:before{content:"\f097"}.fa-phone-square:before{content:"\f098"}.fa-twitter:before{content:"\f099"}.fa-facebook:before{content:"\f09a"}.fa-github:before{content:"\f09b"}.fa-unlock:before{content:"\f09c"}.fa-credit-card:before{content:"\f09d"}.fa-rss:before{content:"\f09e"}.fa-hdd-o:before{content:"\f0a0"}.fa-bullhorn:before{content:"\f0a1"}.fa-bell:before{content:"\f0f3"}.fa-certificate:before{content:"\f0a3"}.fa-hand-o-right:before{content:"\f0a4"}.fa-hand-o-left:before{content:"\f0a5"}.fa-hand-o-up:before{content:"\f0a6"}.fa-hand-o-down:before{content:"\f0a7"}.fa-arrow-circle-left:before{content:"\f0a8"}.fa-arrow-circle-right:before{content:"\f0a9"}.fa-arrow-circle-up:before{content:"\f0aa"}.fa-arrow-circle-down:before{content:"\f0ab"}.fa-globe:before{content:"\f0ac"}.fa-wrench:before{content:"\f0ad"}.fa-tasks:before{content:"\f0ae"}.fa-filter:before{content:"\f0b0"}.fa-briefcase:before{content:"\f0b1"}.fa-arrows-alt:before{content:"\f0b2"}.fa-group:before,.fa-users:before{content:"\f0c0"}.fa-chain:before,.fa-link:before{content:"\f0c1"}.fa-cloud:before{content:"\f0c2"}.fa-flask:before{content:"\f0c3"}.fa-cut:before,.fa-scissors:before{content:"\f0c4"}.fa-copy:before,.fa-files-o:before{content:"\f0c5"}.fa-paperclip:before{content:"\f0c6"}.fa-save:before,.fa-floppy-o:before{content:"\f0c7"}.fa-square:before{content:"\f0c8"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:"\f0c9"}.fa-list-ul:before{content:"\f0ca"}.fa-list-ol:before{content:"\f0cb"}.fa-strikethrough:before{content:"\f0cc"}.fa-underline:before{content:"\f0cd"}.fa-table:before{content:"\f0ce"}.fa-magic:before{content:"\f0d0"}.fa-truck:before{content:"\f0d1"}.fa-pinterest:before{content:"\f0d2"}.fa-pinterest-square:before{content:"\f0d3"}.fa-google-plus-square:before{content:"\f0d4"}.fa-google-plus:before{content:"\f0d5"}.fa-money:before{content:"\f0d6"}.fa-caret-down:before{content:"\f0d7"}.fa-caret-up:before{content:"\f0d8"}.fa-caret-left:before{content:"\f0d9"}.fa-caret-right:before{content:"\f0da"}.fa-columns:before{content:"\f0db"}.fa-unsorted:before,.fa-sort:before{content:"\f0dc"}.fa-sort-down:before,.fa-sort-desc:before{content:"\f0dd"}.fa-sort-up:before,.fa-sort-asc:before{content:"\f0de"}.fa-envelope:before{content:"\f0e0"}.fa-linkedin:before{content:"\f0e1"}.fa-rotate-left:before,.fa-undo:before{content:"\f0e2"}.fa-legal:before,.fa-gavel:before{content:"\f0e3"}.fa-dashboard:before,.fa-tachometer:before{content:"\f0e4"}.fa-comment-o:before{content:"\f0e5"}.fa-comments-o:before{content:"\f0e6"}.fa-flash:before,.fa-bolt:before{content:"\f0e7"}.fa-sitemap:before{content:"\f0e8"}.fa-umbrella:before{content:"\f0e9"}.fa-paste:before,.fa-clipboard:before{content:"\f0ea"}.fa-lightbulb-o:before{content:"\f0eb"}.fa-exchange:before{content:"\f0ec"}.fa-cloud-download:before{content:"\f0ed"}.fa-cloud-upload:before{content:"\f0ee"}.fa-user-md:before{content:"\f0f0"}.fa-stethoscope:before{content:"\f0f1"}.fa-suitcase:before{content:"\f0f2"}.fa-bell-o:before{content:"\f0a2"}.fa-coffee:before{content:"\f0f4"}.fa-cutlery:before{content:"\f0f5"}.fa-file-text-o:before{content:"\f0f6"}.fa-building-o:before{content:"\f0f7"}.fa-hospital-o:before{content:"\f0f8"}.fa-ambulance:before{content:"\f0f9"}.fa-medkit:before{content:"\f0fa"}.fa-fighter-jet:before{content:"\f0fb"}.fa-beer:before{content:"\f0fc"}.fa-h-square:before{content:"\f0fd"}.fa-plus-square:before{content:"\f0fe"}.fa-angle-double-left:before{content:"\f100"}.fa-angle-double-right:before{content:"\f101"}.fa-angle-double-up:before{content:"\f102"}.fa-angle-double-down:before{content:"\f103"}.fa-angle-left:before{content:"\f104"}.fa-angle-right:before{content:"\f105"}.fa-angle-up:before{content:"\f106"}.fa-angle-down:before{content:"\f107"}.fa-desktop:before{content:"\f108"}.fa-laptop:before{content:"\f109"}.fa-tablet:before{content:"\f10a"}.fa-mobile-phone:before,.fa-mobile:before{content:"\f10b"}.fa-circle-o:before{content:"\f10c"}.fa-quote-left:before{content:"\f10d"}.fa-quote-right:before{content:"\f10e"}.fa-spinner:before{content:"\f110"}.fa-circle:before{content:"\f111"}.fa-mail-reply:before,.fa-reply:before{content:"\f112"}.fa-github-alt:before{content:"\f113"}.fa-folder-o:before{content:"\f114"}.fa-folder-open-o:before{content:"\f115"}.fa-smile-o:before{content:"\f118"}.fa-frown-o:before{content:"\f119"}.fa-meh-o:before{content:"\f11a"}.fa-gamepad:before{content:"\f11b"}.fa-keyboard-o:before{content:"\f11c"}.fa-flag-o:before{content:"\f11d"}.fa-flag-checkered:before{content:"\f11e"}.fa-terminal:before{content:"\f120"}.fa-code:before{content:"\f121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\f122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\f123"}.fa-location-arrow:before{content:"\f124"}.fa-crop:before{content:"\f125"}.fa-code-fork:before{content:"\f126"}.fa-unlink:before,.fa-chain-broken:before{content:"\f127"}.fa-question:before{content:"\f128"}.fa-info:before{content:"\f129"}.fa-exclamation:before{content:"\f12a"}.fa-superscript:before{content:"\f12b"}.fa-subscript:before{content:"\f12c"}.fa-eraser:before{content:"\f12d"}.fa-puzzle-piece:before{content:"\f12e"}.fa-microphone:before{content:"\f130"}.fa-microphone-slash:before{content:"\f131"}.fa-shield:before{content:"\f132"}.fa-calendar-o:before{content:"\f133"}.fa-fire-extinguisher:before{content:"\f134"}.fa-rocket:before{content:"\f135"}.fa-maxcdn:before{content:"\f136"}.fa-chevron-circle-left:before{content:"\f137"}.fa-chevron-circle-right:before{content:"\f138"}.fa-chevron-circle-up:before{content:"\f139"}.fa-chevron-circle-down:before{content:"\f13a"}.fa-html5:before{content:"\f13b"}.fa-css3:before{content:"\f13c"}.fa-anchor:before{content:"\f13d"}.fa-unlock-alt:before{content:"\f13e"}.fa-bullseye:before{content:"\f140"}.fa-ellipsis-h:before{content:"\f141"}.fa-ellipsis-v:before{content:"\f142"}.fa-rss-square:before{content:"\f143"}.fa-play-circle:before{content:"\f144"}.fa-ticket:before{content:"\f145"}.fa-minus-square:before{content:"\f146"}.fa-minus-square-o:before{content:"\f147"}.fa-level-up:before{content:"\f148"}.fa-level-down:before{content:"\f149"}.fa-check-square:before{content:"\f14a"}.fa-pencil-square:before{content:"\f14b"}.fa-external-link-square:before{content:"\f14c"}.fa-share-square:before{content:"\f14d"}.fa-compass:before{content:"\f14e"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:"\f150"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:"\f151"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:"\f152"}.fa-euro:before,.fa-eur:before{content:"\f153"}.fa-gbp:before{content:"\f154"}.fa-dollar:before,.fa-usd:before{content:"\f155"}.fa-rupee:before,.fa-inr:before{content:"\f156"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:"\f157"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:"\f158"}.fa-won:before,.fa-krw:before{content:"\f159"}.fa-bitcoin:before,.fa-btc:before{content:"\f15a"}.fa-file:before{content:"\f15b"}.fa-file-text:before{content:"\f15c"}.fa-sort-alpha-asc:before{content:"\f15d"}.fa-sort-alpha-desc:before{content:"\f15e"}.fa-sort-amount-asc:before{content:"\f160"}.fa-sort-amount-desc:before{content:"\f161"}.fa-sort-numeric-asc:before{content:"\f162"}.fa-sort-numeric-desc:before{content:"\f163"}.fa-thumbs-up:before{content:"\f164"}.fa-thumbs-down:before{content:"\f165"}.fa-youtube-square:before{content:"\f166"}.fa-youtube:before{content:"\f167"}.fa-xing:before{content:"\f168"}.fa-xing-square:before{content:"\f169"}.fa-youtube-play:before{content:"\f16a"}.fa-dropbox:before{content:"\f16b"}.fa-stack-overflow:before{content:"\f16c"}.fa-instagram:before{content:"\f16d"}.fa-flickr:before{content:"\f16e"}.fa-adn:before{content:"\f170"}.fa-bitbucket:before{content:"\f171"}.fa-bitbucket-square:before{content:"\f172"}.fa-tumblr:before{content:"\f173"}.fa-tumblr-square:before{content:"\f174"}.fa-long-arrow-down:before{content:"\f175"}.fa-long-arrow-up:before{content:"\f176"}.fa-long-arrow-left:before{content:"\f177"}.fa-long-arrow-right:before{content:"\f178"}.fa-apple:before{content:"\f179"}.fa-windows:before{content:"\f17a"}.fa-android:before{content:"\f17b"}.fa-linux:before{content:"\f17c"}.fa-dribbble:before{content:"\f17d"}.fa-skype:before{content:"\f17e"}.fa-foursquare:before{content:"\f180"}.fa-trello:before{content:"\f181"}.fa-female:before{content:"\f182"}.fa-male:before{content:"\f183"}.fa-gittip:before{content:"\f184"}.fa-sun-o:before{content:"\f185"}.fa-moon-o:before{content:"\f186"}.fa-archive:before{content:"\f187"}.fa-bug:before{content:"\f188"}.fa-vk:before{content:"\f189"}.fa-weibo:before{content:"\f18a"}.fa-renren:before{content:"\f18b"}.fa-pagelines:before{content:"\f18c"}.fa-stack-exchange:before{content:"\f18d"}.fa-arrow-circle-o-right:before{content:"\f18e"}.fa-arrow-circle-o-left:before{content:"\f190"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:"\f191"}.fa-dot-circle-o:before{content:"\f192"}.fa-wheelchair:before{content:"\f193"}.fa-vimeo-square:before{content:"\f194"}.fa-turkish-lira:before,.fa-try:before{content:"\f195"}.fa-plus-square-o:before{content:"\f196"}.fa-space-shuttle:before{content:"\f197"}.fa-slack:before{content:"\f198"}.fa-envelope-square:before{content:"\f199"}.fa-wordpress:before{content:"\f19a"}.fa-openid:before{content:"\f19b"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:"\f19c"}.fa-mortar-board:before,.fa-graduation-cap:before{content:"\f19d"}.fa-yahoo:before{content:"\f19e"}.fa-google:before{content:"\f1a0"}.fa-reddit:before{content:"\f1a1"}.fa-reddit-square:before{content:"\f1a2"}.fa-stumbleupon-circle:before{content:"\f1a3"}.fa-stumbleupon:before{content:"\f1a4"}.fa-delicious:before{content:"\f1a5"}.fa-digg:before{content:"\f1a6"}.fa-pied-piper:before{content:"\f1a7"}.fa-pied-piper-alt:before{content:"\f1a8"}.fa-drupal:before{content:"\f1a9"}.fa-joomla:before{content:"\f1aa"}.fa-language:before{content:"\f1ab"}.fa-fax:before{content:"\f1ac"}.fa-building:before{content:"\f1ad"}.fa-child:before{content:"\f1ae"}.fa-paw:before{content:"\f1b0"}.fa-spoon:before{content:"\f1b1"}.fa-cube:before{content:"\f1b2"}.fa-cubes:before{content:"\f1b3"}.fa-behance:before{content:"\f1b4"}.fa-behance-square:before{content:"\f1b5"}.fa-steam:before{content:"\f1b6"}.fa-steam-square:before{content:"\f1b7"}.fa-recycle:before{content:"\f1b8"}.fa-automobile:before,.fa-car:before{content:"\f1b9"}.fa-cab:before,.fa-taxi:before{content:"\f1ba"}.fa-tree:before{content:"\f1bb"}.fa-spotify:before{content:"\f1bc"}.fa-deviantart:before{content:"\f1bd"}.fa-soundcloud:before{content:"\f1be"}.fa-database:before{content:"\f1c0"}.fa-file-pdf-o:before{content:"\f1c1"}.fa-file-word-o:before{content:"\f1c2"}.fa-file-excel-o:before{content:"\f1c3"}.fa-file-powerpoint-o:before{content:"\f1c4"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:"\f1c5"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:"\f1c6"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:"\f1c7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\f1c8"}.fa-file-code-o:before{content:"\f1c9"}.fa-vine:before{content:"\f1ca"}.fa-codepen:before{content:"\f1cb"}.fa-jsfiddle:before{content:"\f1cc"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:"\f1cd"}.fa-circle-o-notch:before{content:"\f1ce"}.fa-ra:before,.fa-rebel:before{content:"\f1d0"}.fa-ge:before,.fa-empire:before{content:"\f1d1"}.fa-git-square:before{content:"\f1d2"}.fa-git:before{content:"\f1d3"}.fa-hacker-news:before{content:"\f1d4"}.fa-tencent-weibo:before{content:"\f1d5"}.fa-qq:before{content:"\f1d6"}.fa-wechat:before,.fa-weixin:before{content:"\f1d7"}.fa-send:before,.fa-paper-plane:before{content:"\f1d8"}.fa-send-o:before,.fa-paper-plane-o:before{content:"\f1d9"}.fa-history:before{content:"\f1da"}.fa-circle-thin:before{content:"\f1db"}.fa-header:before{content:"\f1dc"}.fa-paragraph:before{content:"\f1dd"}.fa-sliders:before{content:"\f1de"}.fa-share-alt:before{content:"\f1e0"}.fa-share-alt-square:before{content:"\f1e1"}.fa-bomb:before{content:"\f1e2"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:"\f1e3"}.fa-tty:before{content:"\f1e4"}.fa-binoculars:before{content:"\f1e5"}.fa-plug:before{content:"\f1e6"}.fa-slideshare:before{content:"\f1e7"}.fa-twitch:before{content:"\f1e8"}.fa-yelp:before{content:"\f1e9"}.fa-newspaper-o:before{content:"\f1ea"}.fa-wifi:before{content:"\f1eb"}.fa-calculator:before{content:"\f1ec"}.fa-paypal:before{content:"\f1ed"}.fa-google-wallet:before{content:"\f1ee"}.fa-cc-visa:before{content:"\f1f0"}.fa-cc-mastercard:before{content:"\f1f1"}.fa-cc-discover:before{content:"\f1f2"}.fa-cc-amex:before{content:"\f1f3"}.fa-cc-paypal:before{content:"\f1f4"}.fa-cc-stripe:before{content:"\f1f5"}.fa-bell-slash:before{content:"\f1f6"}.fa-bell-slash-o:before{content:"\f1f7"}.fa-trash:before{content:"\f1f8"}.fa-copyright:before{content:"\f1f9"}.fa-at:before{content:"\f1fa"}.fa-eyedropper:before{content:"\f1fb"}.fa-paint-brush:before{content:"\f1fc"}.fa-birthday-cake:before{content:"\f1fd"}.fa-area-chart:before{content:"\f1fe"}.fa-pie-chart:before{content:"\f200"}.fa-line-chart:before{content:"\f201"}.fa-lastfm:before{content:"\f202"}.fa-lastfm-square:before{content:"\f203"}.fa-toggle-off:before{content:"\f204"}.fa-toggle-on:before{content:"\f205"}.fa-bicycle:before{content:"\f206"}.fa-bus:before{content:"\f207"}.fa-ioxhost:before{content:"\f208"}.fa-angellist:before{content:"\f209"}.fa-cc:before{content:"\f20a"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:"\f20b"}.fa-meanpath:before{content:"\f20c"}

/**********************
	-	RESET	-
************************/
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0; padding: 0; border: 0; outline: 0; font-size: 100%; vertical-align: baseline; background: transparent;
}


/***********************
	-	BASICS 	-
***********************/
html {
	overflow-x:hidden;
	padding: 0 !important;
	background-image:url(../images/tiles/bgtile.jpg);
	margin:0px !important;
}





  /*********************************************************************************************
		-	SET THE SCREEN SIZES FOR THE BANNER IF YOU WISH TO MAKE THE BANNER RESOPONSIVE 	-
  **********************************************************************************************/

  /*	-	THE BANNER CONTAINER (Padding, Shadow, Border etc. )	-	*/

  .bannercontainer {
		padding:0px;
		background-color:#fff;
		width:100%;
		position:relative;
		position:relative;
		margin-left:auto;
		margin-right:auto;


	}

  .banner{
		width:100%;
		max-height:490px;
		position:relative;
		overflow:hidden;
   }


  /*	THE MEDIA CHOOSER TO SET DIFFERENT SIZES OF THE CONTAINER DEPENDING ON THE SCREEN SIZE    */
   @media only screen and (min-width: 768px) and (max-width: 959px) {

 		  .banner, .bannercontainer			{	width:100%; height:395px;}




   }

   @media only screen and (min-width: 480px) and (max-width: 767px) {
		   .banner, .bannercontainer		{	width:100%; height:250px;	}




   }

   @media only screen and (min-width: 0px) and (max-width: 479px) {
			.banner, .bannercontainer		{	width:100%;height:166px;	}.tp-rightarrow.navbar{top:-37px!important;}.tp-leftarrow.navbar{top:-37px!important;}




   }








/*************************
	-	CAPTIONS	-
**************************/

.tp-hide-revslider,.tp-caption.tp-hidden-caption	{	visibility:hidden !important; display:none !important;}


.tp-caption { z-index:1;}

.tp-caption-demo .tp-caption	{	position:relative !important; display:inline-block; margin-bottom:10px; margin-right:20px !important;}

.tp-caption.medium_grey {
position:absolute;
color:#fff;
text-shadow:0px 2px 5px rgba(0, 0, 0, 0.5);
font-weight:700;
font-size:20px;
line-height:20px;
font-family:Arial;
padding:2px 4px;
margin:0px;
border-width:0px;
border-style:none;
background-color:#888;
white-space:nowrap;
}

.tp-caption.small_text {
position:absolute;
color:#fff;
text-shadow:0px 2px 5px rgba(0, 0, 0, 0.5);
font-weight:700;
font-size:14px;
line-height:20px;
font-family:Arial;
margin:0px;
border-width:0px;
border-style:none;
white-space:nowrap;
}

.tp-caption.medium_text {
position:absolute;
color:#fff;
text-shadow:0px 2px 5px rgba(0, 0, 0, 0.5);
font-weight:700;
font-size:20px;
line-height:20px;
font-family:Arial;
margin:0px;
border-width:0px;
border-style:none;
white-space:nowrap;
}


.tp-caption.large_bold_white_25 {
font-size:55px;
line-height:65px;
font-weight:700;
font-family:"Open Sans";
color:#fff;
text-decoration:none;
background-color:transparent;
text-align:center;
text-shadow:#000 0px 5px 10px;
border-width:0px;
border-color:rgb(255, 255, 255);
border-style:none;
}

.tp-caption.medium_text_shadow {
font-size:25px;
line-height:25px;
font-weight:600;
font-family:"Open Sans";
color:#fff;
text-decoration:none;
background-color:transparent;
text-align:center;
text-shadow:#000 0px 5px 10px;
border-width:0px;
border-color:rgb(255, 255, 255);
border-style:none;
}

.tp-caption.large_text {
position:absolute;
color:#fff;
text-shadow:0px 2px 5px rgba(0, 0, 0, 0.5);
font-weight:700;
font-size:40px;
line-height:40px;
font-family:Arial;
margin:0px;
border-width:0px;
border-style:none;
white-space:nowrap;
}

.tp-caption.very_large_text {
position:absolute;
color:#fff;
text-shadow:0px 2px 5px rgba(0, 0, 0, 0.5);
font-weight:700;
font-size:60px;
line-height:60px;
font-family:Arial;
margin:0px;
border-width:0px;
border-style:none;
white-space:nowrap;
letter-spacing:-2px;
}

.tp-caption.very_big_white {
position:absolute;
color:#fff;
text-shadow:none;
font-weight:800;
font-size:60px;
line-height:60px;
font-family:Arial;
margin:0px;
border-width:0px;
border-style:none;
white-space:nowrap;
padding:0px 4px;
padding-top:1px;
background-color:#000;
}

.tp-caption.very_big_black {
position:absolute;
color:#000;
text-shadow:none;
font-weight:700;
font-size:60px;
line-height:60px;
font-family:Arial;
margin:0px;
border-width:0px;
border-style:none;
white-space:nowrap;
padding:0px 4px;
padding-top:1px;
background-color:#fff;
}

.tp-caption.modern_medium_fat {
position:absolute;
color:#000;
text-shadow:none;
font-weight:800;
font-size:24px;
line-height:20px;
font-family:"Open Sans", sans-serif;
margin:0px;
border-width:0px;
border-style:none;
white-space:nowrap;
}

.tp-caption.modern_medium_fat_white {
position:absolute;
color:#fff;
text-shadow:none;
font-weight:800;
font-size:24px;
line-height:20px;
font-family:"Open Sans", sans-serif;
margin:0px;
border-width:0px;
border-style:none;
white-space:nowrap;
}

.tp-caption.modern_medium_light {
position:absolute;
color:#000;
text-shadow:none;
font-weight:300;
font-size:24px;
line-height:20px;
font-family:"Open Sans", sans-serif;
margin:0px;
border-width:0px;
border-style:none;
white-space:nowrap;
}

.tp-caption.modern_big_bluebg {
position:absolute;
color:#fff;
text-shadow:none;
font-weight:800;
font-size:30px;
line-height:36px;
font-family:"Open Sans", sans-serif;
padding:3px 10px;
margin:0px;
border-width:0px;
border-style:none;
background-color:#4e5b6c;
letter-spacing:0;
}

.tp-caption.modern_big_redbg {
position:absolute;
color:#fff;
text-shadow:none;
font-weight:300;
font-size:30px;
line-height:36px;
font-family:"Open Sans", sans-serif;
padding:3px 10px;
padding-top:1px;
margin:0px;
border-width:0px;
border-style:none;
background-color:#de543e;
letter-spacing:0;
}

.tp-caption.modern_small_text_dark {
position:absolute;
color:#555;
text-shadow:none;
font-size:14px;
line-height:22px;
font-family:Arial;
margin:0px;
border-width:0px;
border-style:none;
white-space:nowrap;
}

.tp-caption.boxshadow {
-moz-box-shadow:0px 0px 20px rgba(0, 0, 0, 0.5);
-webkit-box-shadow:0px 0px 20px rgba(0, 0, 0, 0.5);
box-shadow:0px 0px 20px rgba(0, 0, 0, 0.5);
}

.tp-caption.black {
color:#000;
text-shadow:none;
}

.tp-caption.noshadow {
text-shadow:none;
}

.tp-caption a {
color:#ff7302;
text-shadow:none;
-webkit-transition:all 0.2s ease-out;
-moz-transition:all 0.2s ease-out;
-o-transition:all 0.2s ease-out;
-ms-transition:all 0.2s ease-out;
}

.tp-caption a:hover {
color:#ffa902;
}

.tp-caption.thinheadline_dark {
position:absolute;
color:rgba(0,0,0,0.85);
text-shadow:none;
font-weight:300;
font-size:30px;
line-height:30px;
font-family:"Open Sans";
background-color:transparent;
}

.tp-caption.thintext_dark {
position:absolute;
color:rgba(0,0,0,0.85);
text-shadow:none;
font-weight:300;
font-size:16px;
line-height:26px;
font-family:"Open Sans";
background-color:transparent;
}

.tp-caption.medium_bg_red a {
	color: #fff;
    text-decoration: none;
}

.tp-caption.medium_bg_red a:hover {
	color: #fff;
    text-decoration: underline;
}

.tp-caption.smoothcircle {
font-size:30px;
line-height:75px;
font-weight:800;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:rgb(0, 0, 0);
background-color:rgba(0, 0, 0, 0.498039);
padding:50px 25px;
text-align:center;
border-radius:500px 500px 500px 500px;
border-width:0px;
border-color:rgb(0, 0, 0);
border-style:none;
}

.tp-caption.largeblackbg {
font-size:50px;
line-height:70px;
font-weight:300;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:rgb(0, 0, 0);
padding:0px 20px 5px;
text-shadow:none;
border-width:0px;
border-color:rgb(255, 255, 255);
border-style:none;
}

.tp-caption.largepinkbg {
position:absolute;
color:#fff;
text-shadow:none;
font-weight:300;
font-size:50px;
line-height:70px;
font-family:"Open Sans";
background-color:#db4360;
padding:0px 20px;
-webkit-border-radius:0px;
-moz-border-radius:0px;
border-radius:0px;
}

.tp-caption.largewhitebg {
position:absolute;
color:#000;
text-shadow:none;
font-weight:300;
font-size:50px;
line-height:70px;
font-family:"Open Sans";
background-color:#fff;
padding:0px 20px;
-webkit-border-radius:0px;
-moz-border-radius:0px;
border-radius:0px;
}

.tp-caption.largegreenbg {
position:absolute;
color:#fff;
text-shadow:none;
font-weight:300;
font-size:50px;
line-height:70px;
font-family:"Open Sans";
background-color:#67ae73;
padding:0px 20px;
-webkit-border-radius:0px;
-moz-border-radius:0px;
border-radius:0px;
}

.tp-caption.excerpt {
font-size:36px;
line-height:36px;
font-weight:700;
font-family:Arial;
color:#ffffff;
text-decoration:none;
background-color:rgba(0, 0, 0, 1);
text-shadow:none;
margin:0px;
letter-spacing:-1.5px;
padding:1px 4px 0px 4px;
width:150px;
white-space:normal !important;
height:auto;
border-width:0px;
border-color:rgb(255, 255, 255);
border-style:none;
}

.tp-caption.large_bold_grey {
font-size:60px;
line-height:60px;
font-weight:800;
font-family:"Open Sans";
color:rgb(102, 102, 102);
text-decoration:none;
background-color:transparent;
text-shadow:none;
margin:0px;
padding:1px 4px 0px;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_thin_grey {
font-size:34px;
line-height:30px;
font-weight:300;
font-family:"Open Sans";
color:rgb(102, 102, 102);
text-decoration:none;
background-color:transparent;
padding:1px 4px 0px;
text-shadow:none;
margin:0px;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.small_thin_grey {
font-size:18px;
line-height:26px;
font-weight:300;
font-family:"Open Sans";
color:rgb(117, 117, 117);
text-decoration:none;
background-color:transparent;
padding:1px 4px 0px;
text-shadow:none;
margin:0px;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.lightgrey_divider {
text-decoration:none;
background-color:rgba(235, 235, 235, 1);
width:370px;
height:3px;
background-position:initial initial;
background-repeat:initial initial;
border-width:0px;
border-color:rgb(34, 34, 34);
border-style:none;
}

.tp-caption.large_bold_darkblue {
font-size:58px;
line-height:60px;
font-weight:800;
font-family:"Open Sans";
color:rgb(52, 73, 94);
text-decoration:none;
background-color:transparent;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_bg_darkblue {
font-size:20px;
line-height:20px;
font-weight:800;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:rgb(52, 73, 94);
padding:10px;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_bold_red {
font-size:24px;
line-height:30px;
font-weight:800;
font-family:"Open Sans";
color:rgb(227, 58, 12);
text-decoration:none;
background-color:transparent;
padding:0px;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_light_red {
font-size:21px;
line-height:26px;
font-weight:300;
font-family:"Open Sans";
color:rgb(227, 58, 12);
text-decoration:none;
background-color:transparent;
padding:0px;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_bg_red {
font-size:20px;
line-height:20px;
font-weight:800;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:rgb(227, 58, 12);
padding:10px;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_bold_orange {
font-size:24px;
line-height:30px;
font-weight:800;
font-family:"Open Sans";
color:rgb(243, 156, 18);
text-decoration:none;
background-color:transparent;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_bg_orange {
font-size:20px;
line-height:20px;
font-weight:800;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:rgb(243, 156, 18);
padding:10px;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.grassfloor {
text-decoration:none;
background-color:rgba(160, 179, 151, 1);
width:4000px;
height:150px;
border-width:0px;
border-color:rgb(34, 34, 34);
border-style:none;
}

.tp-caption.large_bold_white {
font-size:58px;
line-height:60px;
font-weight:800;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:transparent;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_light_white {
font-size:30px;
line-height:36px;
font-weight:300;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:transparent;
padding:0px;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.mediumlarge_light_white {
font-size:34px;
line-height:40px;
font-weight:300;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:transparent;
padding:0px;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.mediumlarge_light_white_center {
font-size:34px;
line-height:40px;
font-weight:300;
font-family:"Open Sans";
color:#ffffff;
text-decoration:none;
background-color:transparent;
padding:0px 0px 0px 0px;
text-align:center;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_bg_asbestos {
font-size:20px;
line-height:20px;
font-weight:800;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:rgb(127, 140, 141);
padding:10px;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_light_black {
font-size:30px;
line-height:36px;
font-weight:300;
font-family:"Open Sans";
color:rgb(0, 0, 0);
text-decoration:none;
background-color:transparent;
padding:0px;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.large_bold_black {
font-size:58px;
line-height:60px;
font-weight:800;
font-family:"Open Sans";
color:rgb(0, 0, 0);
text-decoration:none;
background-color:transparent;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.mediumlarge_light_darkblue {
font-size:34px;
line-height:40px;
font-weight:300;
font-family:"Open Sans";
color:rgb(52, 73, 94);
text-decoration:none;
background-color:transparent;
padding:0px;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.small_light_white {
font-size:17px;
line-height:28px;
font-weight:300;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:transparent;
padding:0px;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.roundedimage {
border-width:0px;
border-color:rgb(34, 34, 34);
border-style:none;
}

.tp-caption.large_bg_black {
font-size:40px;
line-height:40px;
font-weight:800;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:rgb(0, 0, 0);
padding:10px 20px 15px;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.mediumwhitebg {
font-size:30px;
line-height:30px;
font-weight:300;
font-family:"Open Sans";
color:rgb(0, 0, 0);
text-decoration:none;
background-color:rgb(255, 255, 255);
padding:5px 15px 10px;
text-shadow:none;
border-width:0px;
border-color:rgb(0, 0, 0);
border-style:none;
}

.tp-caption.medium_bg_orange_new1 {
font-size:20px;
line-height:20px;
font-weight:800;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:rgb(243, 156, 18);
padding:10px;
border-width:0px;
border-color:rgb(255, 214, 88);
border-style:none;
}



.tp-caption.boxshadow{
		-moz-box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
		-webkit-box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
	}

.tp-caption.black{
		color: #000;
		text-shadow: none;
		font-weight: 300;
		font-size: 19px;
		line-height: 19px;
		font-family: 'Open Sans', sans;
	}

.tp-caption.noshadow {
		text-shadow: none;
	}


.tp_inner_padding	{	box-sizing:border-box;
						-webkit-box-sizing:border-box;
						-moz-box-sizing:border-box;
						max-height:none !important;	}


/*.tp-caption			{	transform:none !important}*/


/*********************************
	-	SPECIAL TP CAPTIONS -
**********************************/
.tp-caption .frontcorner		{
										width: 0;
										height: 0;
										border-left: 40px solid transparent;
										border-right: 0px solid transparent;
										border-top: 40px solid #00A8FF;
										position: absolute;left:-40px;top:0px;
									}

.tp-caption .backcorner		{
										width: 0;
										height: 0;
										border-left: 0px solid transparent;
										border-right: 40px solid transparent;
										border-bottom: 40px solid #00A8FF;
										position: absolute;right:0px;top:0px;
									}

.tp-caption .frontcornertop		{
										width: 0;
										height: 0;
										border-left: 40px solid transparent;
										border-right: 0px solid transparent;
										border-bottom: 40px solid #00A8FF;
										position: absolute;left:-40px;top:0px;
									}

.tp-caption .backcornertop		{
										width: 0;
										height: 0;
										border-left: 0px solid transparent;
										border-right: 40px solid transparent;
										border-top: 40px solid #00A8FF;
										position: absolute;right:0px;top:0px;
									}

/******************************
	-	BUTTONS	-
*******************************/

.tp-simpleresponsive .button				{	padding:6px 13px 5px; border-radius: 3px; -moz-border-radius: 3px; -webkit-border-radius: 3px; height:30px;
												cursor:pointer;
												color:#fff !important; text-shadow:0px 1px 1px rgba(0, 0, 0, 0.6) !important; font-size:15px; line-height:45px !important;
												background:url(../images/gradient/g30.png) repeat-x top; font-family: arial, sans-serif; font-weight: bold; letter-spacing: -1px;
											}

.tp-simpleresponsive  .button.big			{	color:#fff; text-shadow:0px 1px 1px rgba(0, 0, 0, 0.6); font-weight:bold; padding:9px 20px; font-size:19px;  line-height:57px !important; background:url(../images/gradient/g40.png) repeat-x top;}


.tp-simpleresponsive  .purchase:hover,
.tp-simpleresponsive  .button:hover,
.tp-simpleresponsive  .button.big:hover		{	background-position:bottom, 15px 11px;}



	@media only screen and (min-width: 768px) and (max-width: 959px) {

	 }



	@media only screen and (min-width: 480px) and (max-width: 767px) {
		.tp-simpleresponsive  .button	{	padding:4px 8px 3px; line-height:25px !important; font-size:11px !important;font-weight:normal;	}
		.tp-simpleresponsive  a.button { -webkit-transition: none; -moz-transition: none; -o-transition: none; -ms-transition: none;	 }


	}

    @media only screen and (min-width: 0px) and (max-width: 479px) {
		.tp-simpleresponsive  .button	{	padding:2px 5px 2px; line-height:20px !important; font-size:10px !important;}
		.tp-simpleresponsive  a.button { -webkit-transition: none; -moz-transition: none; -o-transition: none; -ms-transition: none;	 }
	}





/*	BUTTON COLORS	*/



.tp-simpleresponsive  .button.green, .tp-simpleresponsive  .button:hover.green,
.tp-simpleresponsive  .purchase.green, .tp-simpleresponsive  .purchase:hover.green			{ background-color:#21a117; -webkit-box-shadow:  0px 3px 0px 0px #104d0b;        -moz-box-shadow:   0px 3px 0px 0px #104d0b;        box-shadow:   0px 3px 0px 0px #104d0b;  }


.tp-simpleresponsive  .button.blue, .tp-simpleresponsive  .button:hover.blue,
.tp-simpleresponsive  .purchase.blue, .tp-simpleresponsive  .purchase:hover.blue			{ background-color:#1d78cb; -webkit-box-shadow:  0px 3px 0px 0px #0f3e68;        -moz-box-shadow:   0px 3px 0px 0px #0f3e68;        box-shadow:   0px 3px 0px 0px #0f3e68;}


.tp-simpleresponsive  .button.red, .tp-simpleresponsive  .button:hover.red,
.tp-simpleresponsive  .purchase.red, .tp-simpleresponsive  .purchase:hover.red				{ background-color:#cb1d1d; -webkit-box-shadow:  0px 3px 0px 0px #7c1212;        -moz-box-shadow:   0px 3px 0px 0px #7c1212;        box-shadow:   0px 3px 0px 0px #7c1212;}

.tp-simpleresponsive  .button.orange, .tp-simpleresponsive  .button:hover.orange,
.tp-simpleresponsive  .purchase.orange, .tp-simpleresponsive  .purchase:hover.orange		{ background-color:#ff7700; -webkit-box-shadow:  0px 3px 0px 0px #a34c00;        -moz-box-shadow:   0px 3px 0px 0px #a34c00;        box-shadow:   0px 3px 0px 0px #a34c00;}

.tp-simpleresponsive  .button.darkgrey, .tp-simpleresponsive  .button.grey,
.tp-simpleresponsive  .button:hover.darkgrey, .tp-simpleresponsive  .button:hover.grey,
.tp-simpleresponsive  .purchase.darkgrey, .tp-simpleresponsive  .purchase:hover.darkgrey	{ background-color:#555; -webkit-box-shadow:  0px 3px 0px 0px #222;        -moz-box-shadow:   0px 3px 0px 0px #222;        box-shadow:   0px 3px 0px 0px #222;}

.tp-simpleresponsive  .button.lightgrey, .tp-simpleresponsive  .button:hover.lightgrey,
.tp-simpleresponsive  .purchase.lightgrey, .tp-simpleresponsive  .purchase:hover.lightgrey	{ background-color:#888; -webkit-box-shadow:  0px 3px 0px 0px #555;        -moz-box-shadow:   0px 3px 0px 0px #555;        box-shadow:   0px 3px 0px 0px #555;}



/****************************************************************

	-	SET THE ANIMATION EVEN MORE SMOOTHER ON ANDROID   -

******************************************************************/

/*.tp-simpleresponsive				{	-webkit-perspective: 1500px;
										-moz-perspective: 1500px;
										-o-perspective: 1500px;
										-ms-perspective: 1500px;
										perspective: 1500px;
									}*/




/**********************************************
	-	FULLSCREEN AND FULLWIDHT CONTAINERS	-
**********************************************/

.fullscreen-container {
		width:100%;
		position:relative;
		padding:0;
}



.fullwidthbanner-container{
	width:100%;
	position:relative;
	padding:0;
	overflow:hidden;
}

.fullwidthbanner-container .fullwidthbanner{
	width:100%;
	position:relative;
}



/************************************************
	  - SOME CAPTION MODIFICATION AT START  -
*************************************************/
.tp-simpleresponsive .caption,
.tp-simpleresponsive .tp-caption {
	/*-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";		-moz-opacity: 0;	-khtml-opacity: 0;	opacity: 0; */
	position:absolute;visibility: hidden;
	-webkit-font-smoothing: antialiased !important;
}


.tp-simpleresponsive img	{	max-width:none;}



/******************************
	-	IE8 HACKS	-
*******************************/
.noFilterClass {
	filter:none !important;
}


/******************************
	-	SHADOWS		-
******************************/
.tp-bannershadow  {
		position:absolute;

		margin-left:auto;
		margin-right:auto;
		-moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
	}

.tp-bannershadow.tp-shadow1 {	background:url(../img/shadow1.png) no-repeat; background-size:100% 100%; width:890px; height:60px; bottom:-60px;}
.tp-bannershadow.tp-shadow2 {	background:url(../img/shadow2.png) no-repeat; background-size:100% 100%; width:890px; height:60px;bottom:-60px;}
.tp-bannershadow.tp-shadow3 {	background:url(../img/shadow3.png) no-repeat; background-size:100% 100%; width:890px; height:60px;bottom:-60px;}


/********************************
	-	FULLSCREEN VIDEO	-
*********************************/
.caption.fullscreenvideo {	left:0px; top:0px; position:absolute;width:100%;height:100%;}
.caption.fullscreenvideo iframe,
.caption.fullscreenvideo video	{ width:100% !important; height:100% !important; display: none}

.tp-caption.fullscreenvideo {	left:0px; top:0px; position:absolute;width:100%;height:100%;}
.tp-caption.fullscreenvideo iframe,
.tp-caption.fullscreenvideo iframe video	{ width:100% !important; height:100% !important; display: none;}


.fullscreenvideo .vjs-loading-spinner { visibility:none;display:none !important; width:0px;height:0px;}
.fullscreenvideo .vjs-control-bar.vjs-fade-out,
.fullscreenvideo .vjs-control-bar.vjs-fade-in,
.fullscreenvideo .vjs-control-bar.vjs-fade-out.vjs-lock-showing,
.fullscreenvideo .vjs-control-bar.vjs-fade-in.vjs-lock-showing		{	visibility: hidden !important; opacity: 0 !important;display:none !important;width:0px;height:0px;overflow: hidden;}

.fullcoveredvideo.video-js,
.fullcoveredvideo video				{	background: transparent !important;}

.fullcoveredvideo .vjs-poster		{	background-position: center center;background-size: cover;width:100%;height:100%;top:0px;left:0px;}

/********************************
	-	DOTTED OVERLAYS	-
*********************************/
.tp-dottedoverlay						{	background-repeat:repeat;width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:1;}
.tp-dottedoverlay.twoxtwo				{	background:url(../img/gridtile.png)}
.tp-dottedoverlay.twoxtwowhite			{	background:url(../img/gridtile_white.png)}
.tp-dottedoverlay.threexthree			{	background:url(../img/gridtile_3x23.png)}
.tp-dottedoverlay.threexthreewhite		{	background:url(../img/gridtile_3x3_white.png)}
/********************************
	-	DOTTED OVERLAYS ENDS	-
*********************************/


/************************
	-	NAVIGATION	-
*************************/

/** BULLETS **/

.tpclear		{	clear:both;}


.tp-bullets									{	z-index:1000; position:absolute;
												-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
												-moz-opacity: 1;
												-khtml-opacity: 1;
												opacity: 1;
												-webkit-transition: opacity 0.2s ease-out; -moz-transition: opacity 0.2s ease-out; -o-transition: opacity 0.2s ease-out; -ms-transition: opacity 0.2s ease-out;-webkit-transform: translateZ(5px);
											}
.tp-bullets.hidebullets					{
												-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
												-moz-opacity: 0;
												-khtml-opacity: 0;
												opacity: 0;
											}


.tp-bullets.simplebullets.navbar						{ 	border:1px solid #666; border-bottom:1px solid #444; background:url(../img/boxed_bgtile.png); height:40px; padding:0px 10px; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px ;}

.tp-bullets.simplebullets.navbar-old					{ 	 background:url(../img/navigdots_bgtile.png); height:35px; padding:0px 10px; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px ;}


.tp-bullets.simplebullets.round .bullet					{	cursor:pointer; position:relative;	background:url(../img/bullet.png) no-Repeat top left;	width:20px;	height:20px;  margin-right:0px; float:left; margin-top:0px; margin-left:3px;}
.tp-bullets.simplebullets.round .bullet.last			{	margin-right:3px;}

.tp-bullets.simplebullets.round-old .bullet				{	cursor:pointer; position:relative;	background:url(../img/bullets.png) no-Repeat bottom left;	width:23px;	height:23px;  margin-right:0px; float:left; margin-top:0px;}
.tp-bullets.simplebullets.round-old .bullet.last		{	margin-right:0px;}


/**	SQUARE BULLETS **/
.tp-bullets.simplebullets.square .bullet				{	cursor:pointer; position:relative;	background:url(../img/bullets2.png) no-Repeat bottom left;	width:19px;	height:19px;  margin-right:0px; float:left; margin-top:0px;}
.tp-bullets.simplebullets.square .bullet.last			{	margin-right:0px;}


/**	SQUARE BULLETS **/
.tp-bullets.simplebullets.square-old .bullet			{	cursor:pointer; position:relative;	background:url(../img/bullets2.png) no-Repeat bottom left;	width:19px;	height:19px;  margin-right:0px; float:left; margin-top:0px;}
.tp-bullets.simplebullets.square-old .bullet.last		{	margin-right:0px;}


/** navbar NAVIGATION VERSION **/
.tp-bullets.simplebullets.navbar .bullet			{	cursor:pointer; position:relative;	background:url(../img/bullet_boxed.png) no-Repeat top left;	width:18px;	height:19px;   margin-right:5px; float:left; margin-top:0px;}

.tp-bullets.simplebullets.navbar .bullet.first		{	margin-left:0px !important;}
.tp-bullets.simplebullets.navbar .bullet.last		{	margin-right:0px !important;}



/** navbar NAVIGATION VERSION **/
.tp-bullets.simplebullets.navbar-old .bullet			{	cursor:pointer; position:relative;	background:url(../img/navigdots.png) no-Repeat bottom left;	width:15px;	height:15px;  margin-left:5px !important; margin-right:5px !important;float:left; margin-top:10px;}
.tp-bullets.simplebullets.navbar-old .bullet.first		{	margin-left:0px !important;}
.tp-bullets.simplebullets.navbar-old .bullet.last		{	margin-right:0px !important;}


.tp-bullets.simplebullets .bullet:hover,
.tp-bullets.simplebullets .bullet.selected				{	background-position:top left; }

.tp-bullets.simplebullets.round .bullet:hover,
.tp-bullets.simplebullets.round .bullet.selected,
.tp-bullets.simplebullets.navbar .bullet:hover,
.tp-bullets.simplebullets.navbar .bullet.selected		{	background-position:bottom left; }



/*************************************
	-	TP ARROWS 	-
**************************************/
.tparrows												{	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
															-moz-opacity: 1;
															-khtml-opacity: 1;
															opacity: 1;
															-webkit-transition: opacity 0.2s ease-out; -moz-transition: opacity 0.2s ease-out; -o-transition: opacity 0.2s ease-out; -ms-transition: opacity 0.2s ease-out;			-webkit-transform: translateZ(5px);

														}
.tparrows.hidearrows									{
															-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
															-moz-opacity: 0;
															-khtml-opacity: 0;
															opacity: 0;
														}
.tp-leftarrow											{	z-index:100;cursor:pointer; position:relative;	background:url(../img/large_left.png) no-Repeat top left;	width:40px;	height:40px;   }
.tp-rightarrow											{	z-index:100;cursor:pointer; position:relative;	background:url(../img/large_right.png) no-Repeat top left;	width:40px;	height:40px;   }


.tp-leftarrow.round										{	z-index:100;cursor:pointer; position:relative;	background:url(../img/small_left.png) no-Repeat top left;	width:19px;	height:14px;  margin-right:0px; float:left; margin-top:0px;	}
.tp-rightarrow.round									{	z-index:100;cursor:pointer; position:relative;	background:url(../img/small_right.png) no-Repeat top left;	width:19px;	height:14px;  margin-right:0px; float:left;	margin-top:0px;}


.tp-leftarrow.round-old									{	z-index:100;cursor:pointer; position:relative;	background:url(../img/arrow_left.png) no-Repeat top left;	width:26px;	height:26px;  margin-right:0px; float:left; margin-top:0px;	}
.tp-rightarrow.round-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../img/arrow_right.png) no-Repeat top left;	width:26px;	height:26px;  margin-right:0px; float:left;	margin-top:0px;}


.tp-leftarrow.navbar									{	z-index:100;cursor:pointer; position:relative;	background:url(../img/small_left_boxed.png) no-Repeat top left;	width:20px;	height:15px;   float:left;	margin-right:6px; margin-top:12px;}
.tp-rightarrow.navbar									{	z-index:100;cursor:pointer; position:relative;	background:url(../img/small_right_boxed.png) no-Repeat top left;	width:20px;	height:15px;   float:left;	margin-left:6px; margin-top:12px;}


.tp-leftarrow.navbar-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../img/arrowleft.png) no-Repeat top left;		width:9px;	height:16px;   float:left;	margin-right:6px; margin-top:10px;}
.tp-rightarrow.navbar-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../img/arrowright.png) no-Repeat top left;	width:9px;	height:16px;   float:left;	margin-left:6px; margin-top:10px;}

.tp-leftarrow.navbar-old.thumbswitharrow				{	margin-right:10px; }
.tp-rightarrow.navbar-old.thumbswitharrow				{	margin-left:0px; }

.tp-leftarrow.square									{	z-index:100;cursor:pointer; position:relative;	background:url(../img/arrow_left2.png) no-Repeat top left;	width:12px;	height:17px;   float:left;	margin-right:0px; margin-top:0px;}
.tp-rightarrow.square									{	z-index:100;cursor:pointer; position:relative;	background:url(../img/arrow_right2.png) no-Repeat top left;	width:12px;	height:17px;   float:left;	margin-left:0px; margin-top:0px;}


.tp-leftarrow.square-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../img/arrow_left2.png) no-Repeat top left;	width:12px;	height:17px;   float:left;	margin-right:0px; margin-top:0px;}
.tp-rightarrow.square-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../img/arrow_right2.png) no-Repeat top left;	width:12px;	height:17px;   float:left;	margin-left:0px; margin-top:0px;}


.tp-leftarrow.default									{	z-index:100;cursor:pointer; position:relative;	background:url(../img/large_left.png) no-Repeat 0 0;	width:40px;	height:40px;

														}
.tp-rightarrow.default									{	z-index:100;cursor:pointer; position:relative;	background:url(../img/large_right.png) no-Repeat 0 0;	width:40px;	height:40px;

														}




.tp-leftarrow:hover,
.tp-rightarrow:hover 									{	background-position:bottom left; }






/****************************************************************************************************
	-	TP THUMBS 	-
*****************************************************************************************************

 - tp-thumbs & tp-mask Width is the width of the basic Thumb Container (500px basic settings)

 - .bullet width & height is the dimension of a simple Thumbnail (basic 100px x 50px)

 *****************************************************************************************************/


.tp-bullets.tp-thumbs						{	z-index:1000; position:absolute; padding:3px;background-color:#fff;
												width:500px;height:50px; 			/* THE DIMENSIONS OF THE THUMB CONTAINER */
												margin-top:-50px;
											}


.fullwidthbanner-container .tp-thumbs		{  padding:3px;}

.tp-bullets.tp-thumbs .tp-mask				{	width:500px; height:50px;  			/* THE DIMENSIONS OF THE THUMB CONTAINER */
												overflow:hidden; position:relative;}


.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer	{	width:5000px; position:absolute;}

.tp-bullets.tp-thumbs .bullet				{   width:100px; height:50px; 			/* THE DIMENSION OF A SINGLE THUMB */
												cursor:pointer; overflow:hidden;background:none;margin:0;float:left;
												-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
												/*filter: alpha(opacity=50);	*/
												-moz-opacity: 0.5;
												-khtml-opacity: 0.5;
												opacity: 0.5;

												-webkit-transition: all 0.2s ease-out; -moz-transition: all 0.2s ease-out; -o-transition: all 0.2s ease-out; -ms-transition: all 0.2s ease-out;
											}


.tp-bullets.tp-thumbs .bullet:hover,
.tp-bullets.tp-thumbs .bullet.selected		{ 	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";

												-moz-opacity: 1;
												-khtml-opacity: 1;
												opacity: 1;
											}
.tp-thumbs img								{	width:100%; }


/************************************
		-	TP BANNER TIMER		-
*************************************/
.tp-bannertimer								{	width:100%; height:10px; background:url(../img/timer.png);position:absolute; z-index:200;top:0px;}
.tp-bannertimer.tp-bottom					{	bottom:0px;height:5px; top:auto;}




/***************************************
	-	RESPONSIVE SETTINGS 	-
****************************************/




    @media only screen and (min-width: 0px) and (max-width: 479px) {
				.responsive .tp-bullets	{	display:none}
				.responsive .tparrows	{	display:none;}
	}


/******************************
	-	HTML5 VIDEO SETTINGS	-
********************************/

.vjs-tech { margin-top:1px}

.tp-caption .vjs-default-skin .vjs-big-play-button	{	left: 50%;
top: 50%;
margin-left: -20px;
margin-top: -20px;
width: 40px;
height: 40px;
border-radius: 5px;
-moz-border-radius: 5px;
-webkit-border-radius: 5px;
border: none;
box-shadow: none;
text-shadow: none;
line-height: 30px;
vertical-align: top;
padding: 0px;
}

.tp-caption .vjs-default-skin .vjs-big-play-button:before {
 position:absolute;
 top:0px; left:0px;
 line-height:40px;
 text-shadow: none !important;
 color:#fff;
 font-size:18px;

}

.tp-caption  .vjs-default-skin:hover .vjs-big-play-button, .vjs-default-skin .vjs-big-play-button:focus {

	box-shadow:none;
	-webkit-box-shadow:none;

}



/*********************************************

	-	BASIC SETTINGS FOR THE BANNER	-

***********************************************/

 .tp-simpleresponsive img {
		-moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
}



.tp-simpleresponsive a{	text-decoration:none;}

.tp-simpleresponsive ul {
	list-style:none;
	padding:0;
	margin:0;
}

.tp-simpleresponsive >ul >li{
	list-stye:none;
	position:absolute;
	visibility:hidden;
}
/*  CAPTION SLIDELINK   **/
.caption.slidelink a div,
.tp-caption.slidelink a div {	width:3000px; height:1500px;  background:url(../img/coloredbg.png) repeat;}

.tp-loader 	{	background:url(../img/loader.gif) no-repeat 10px 10px; background-color:#fff;  margin:-22px -22px; top:50%; left:50%; z-index:10000; position:absolute;width:44px;height:44px;
				border-radius: 3px;
				-moz-border-radius: 3px;
				-webkit-border-radius: 3px;
			}


.tp-transparentimg {	content:"url(../img/transparent.png)"}
.tp-3d				{	-webkit-transform-style: preserve-3d;
						 -webkit-transform-origin: 50% 50%;
					}



.tp-caption img {
background: transparent;
-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)";
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF);
zoom: 1;
}


@font-face {
  font-family: 'revicons';
  src: url('../font/revicons.eot?5510888');
  src: url('../font/revicons.eot?5510888#iefix') format('embedded-opentype'),
       url('../font/revicons.woff?5510888') format('woff'),
       url('../font/revicons.ttf?5510888') format('truetype'),
       url('../font/revicons.svg?5510888#revicons') format('svg');
  font-weight: normal;
  font-style: normal;
}
/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
/*
@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: 'revicons';
    src: url('../font/revicons.svg?5510888#revicons') format('svg');
  }
}
*/

 [class^="revicon-"]:before, [class*=" revicon-"]:before {
  font-family: "revicons";
  font-style: normal;
  font-weight: normal;
  speak: none;

  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  /* opacity: .8; */

  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;

  /* fix buttons height, for twitter bootstrap */
  line-height: 1em;

  /* Animation center compensation - margins should be symmetric */
  /* remove if not needed */
  margin-left: .2em;

  /* you can be more comfortable with increased icons size */
  /* font-size: 120%; */

  /* Uncomment for 3D effect */
  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
}

.revicon-search-1:before { content: '\e802'; } /* '?' */
.revicon-pencil-1:before { content: '\e831'; } /* '?' */
.revicon-picture-1:before { content: '\e803'; } /* '?' */
.revicon-cancel:before { content: '\e80a'; } /* '?' */
.revicon-info-circled:before { content: '\e80f'; } /* '?' */
.revicon-trash:before { content: '\e801'; } /* '?' */
.revicon-left-dir:before { content: '\e817'; } /* '?' */
.revicon-right-dir:before { content: '\e818'; } /* '?' */
.revicon-down-open:before { content: '\e83b'; } /* '?' */
.revicon-left-open:before { content: '\e819'; } /* '?' */
.revicon-right-open:before { content: '\e81a'; } /* '?' */
.revicon-angle-left:before { content: '\e820'; } /* '?' */
.revicon-angle-right:before { content: '\e81d'; } /* '?' */
.revicon-left-big:before { content: '\e81f'; } /* '?' */
.revicon-right-big:before { content: '\e81e'; } /* '?' */
.revicon-magic:before { content: '\e807'; } /* '?' */
.revicon-picture:before { content: '\e800'; } /* '?' */
.revicon-export:before { content: '\e80b'; } /* '?' */
.revicon-cog:before { content: '\e832'; } /* '?' */
.revicon-login:before { content: '\e833'; } /* '?' */
.revicon-logout:before { content: '\e834'; } /* '?' */
.revicon-video:before { content: '\e805'; } /* '?' */
.revicon-arrow-combo:before { content: '\e827'; } /* '?' */
.revicon-left-open-1:before { content: '\e82a'; } /* '?' */
.revicon-right-open-1:before { content: '\e82b'; } /* '?' */
.revicon-left-open-mini:before { content: '\e822'; } /* '?' */
.revicon-right-open-mini:before { content: '\e823'; } /* '?' */
.revicon-left-open-big:before { content: '\e824'; } /* '?' */
.revicon-right-open-big:before { content: '\e825'; } /* '?' */
.revicon-left:before { content: '\e836'; } /* '?' */
.revicon-right:before { content: '\e826'; } /* '?' */
.revicon-ccw:before { content: '\e808'; } /* '?' */
.revicon-arrows-ccw:before { content: '\e806'; } /* '?' */
.revicon-palette:before { content: '\e829'; } /* '?' */
.revicon-list-add:before { content: '\e80c'; } /* '?' */
.revicon-doc:before { content: '\e809'; } /* '?' */
.revicon-left-open-outline:before { content: '\e82e'; } /* '?' */
.revicon-left-open-2:before { content: '\e82c'; } /* '?' */
.revicon-right-open-outline:before { content: '\e82f'; } /* '?' */
.revicon-right-open-2:before { content: '\e82d'; } /* '?' */
.revicon-equalizer:before { content: '\e83a'; } /* '?' */
.revicon-layers-alt:before { content: '\e804'; } /* '?' */
.revicon-popup:before { content: '\e828'; } /* '?' */




/* CUSTOM REVOLUTION SLIDER SETTINGS FOR THE THEME */

.rs-wrapper{
    float: left;
    width: 100%;
    margin-bottom: 70px;
    position: relative;
}

.fullwidthbanner-container{
    width: 100% !important;
    position: relative;
    max-height: 490px !important;
    overflow: hidden;
}

.fullwidthbanner{
    max-height: 490px;
    background: #f6f6f6;
}

.regular_title{
    background: #333;
    padding: 14px 10px !important;
   color: white;
	font-weight: bold;
	text-transform: uppercase;
	font-size:36px;
	font-family: "Dosis",sans-serif;
}

.regular_list{
    background-color: #fff;
    background-image: url('../img/star.png');
    background-repeat: no-repeat;
    background-position: 5px 8px;
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    font: 18px 'Oswald', Arial, sans-serif;
    line-height: 18px;
    text-transform: uppercase;
    white-space: normal !important;
}

.regular_subtitle{
    
    background: #fff;
    padding: 10px;
    font-size: 24px ;
	font-family: "Dosis",sans-serif;
    line-height: 24px;
    text-transform: uppercase;
    color: #333;
}

.regular_text{
    white-space: normal !important;
    color: #333;
    font: 14px 'Open Sans', Arial, sans-serif;
    line-height: 22px;
    width: 470px;
}

.regular_button{
    background: #d21a10;
    padding: 17px 10px;
    color: #fff;
    text-transform: uppercase;
    font: 14px 'Open Sans', Arial, sans-serif;
    line-height: 14px;
}

/* ==========================================================================
    1. CSS RESET
============================================================================= */

* {
margin:0;
padding:0;
outline:none
}

html{overflow-x:hidden;}
html,body {
height:100%;
-webkit-font-smoothing:antialiased;

}

body {
font:13px/20px "Open Sans",sans-serif;
color:black;
background:#fff;
font-weight:300;

}

div,form,fieldset,legend,label {
margin:0;
padding:0
}

form {
display:inline
}

table {
border-collapse:collapse;
border-spacing:0
}
p{font-size:14px;}
a {
border:none;
outline:none;
text-decoration:none;
color:#606366;
-webkit-transition:all .2s ease-in-out;
-moz-transition:all .2s ease-in-out;
-o-transition:all .2s ease-in-out;
-ms-transition:all .2s ease-in-out;
transition:all .2s ease-in-out
}

i {
-webkit-transition:all .2s ease-in-out;
-moz-transition:all .2s ease-in-out;
-o-transition:all .2s ease-in-out;
-ms-transition:all .2s ease-in-out;
transition:all .2s ease-in-out
}

a:active,a:hover {
text-decoration:none;
color:#000
}

img {
border:none;
max-width:100%
}

textarea:focus,input:focus,select:focus,a:focus {
outline:none
}

h1,h2,h3,h4,h5,h6,td,caption {
font-weight:400
}

th,td {
text-align:left;
vertical-align:top
}

ul,ol {
list-style-position:inside;
margin:0;
padding:0
}

textarea,select,input {
-webkit-box-sizing:border-box;
-moz-box-sizing:border-box;
box-sizing:border-box
}

small {
font-size:11px
}
/* ==========================================================================
    2. TYPOGRAPHY
============================================================================= */
.clear {
clear:both
}

.hide {
display:none!important
}

.elastic {
width:1170px;
position:relative;
margin:0 auto;
display:block
}

.center {
text-align:center
}

.left {
float:left
}

.right {
float:right
}

.space5 {
line-height:5px
}

.space10 {
line-height:10px
}

.space {
line-height:15px
}

.space15 {
line-height:15px
}

.space20 {
line-height:20px
}

.space25 {
line-height:25px
}

.space30 {
line-height:30px
}

.space35 {
line-height:35px
}

.space40 {
line-height:40px
}

.space45 {
line-height:45px
}

.space50 {
line-height:50px
}

.space55 {
line-height:55px
}

.space60 {
line-height:60px
}

.space65 {
line-height:65px
}

.space70 {
line-height:70px
}

.space75 {
line-height:75px
}

.space80 {
line-height:80px
}

.space85 {
line-height:85px
}

.space90 {
line-height:90px
}

.space95 {
line-height:95px
}

.space100 {
line-height:100px
}

.strong {
font-weight:700
}

.boxsize {
-webkit-box-sizing:border-box;
-moz-box-sizing:border-box;
box-sizing:border-box
}

img.i100 {
width:100%;
height:auto
}

.animate {
-webkit-transition:all .3s ease-in-out;
-moz-transition:all .3s ease-in-out;
-o-transition:all .3s ease-in-out;
-ms-transition:all .3s ease-in-out;
transition:all .3s ease-in-out
}

.wrap-middle {
display:table
}

.middle {
display:table-cell;
vertical-align:middle
}

video {
max-width:100%;
height:auto
}

.video-elastic {
position:relative;
padding-bottom:56.25%;
height:0;
overflow:hidden
}

.video-elastic iframe,.video-elastic object,.video-elastic embed,.video-elastic video {
position:absolute;
top:0;
left:0;
width:100%;
height:100%
}

.ov {
overflow:visible!important
}

.abs-fullwidth {
width:100%;
position:absolute;
left:0;
right:0
}

.auto-center {
position:absolute;
top:50%;
left:50%;
-webkit-transform:translate(-50%,-50%);
transform:translate(-50%,-50%)
}

.m5 {
margin:5px
}

.m10 {
margin:10px
}

.m15 {
margin:15px
}

.m20 {
margin:20px
}

.m25 {
margin:25px
}

.m30 {
margin:30px
}

.mt5 {
margin-top:5px
}

.mt10 {
margin-top:10px
}

.mt15 {
margin-top:15px
}

.mt20 {
margin-top:20px
}

.mt25 {
margin-top:25px
}

.mt30 {
margin-top:30px
}

.mr5 {
margin-right:5px
}

.mr10 {
margin-right:10px
}

.mr15 {
margin-right:15px
}

.mr20 {
margin-right:20px
}

.mr25 {
margin-right:25px
}

.mr30 {
margin-right:30px
}

.mb5 {
margin-bottom:5px
}

.mb10 {
margin-bottom:10px
}

.mb15 {
margin-bottom:15px
}

.mb20 {
margin-bottom:20px
}

.mb25 {
margin-bottom:25px
}

.mb30 {
margin-bottom:30px
}

.mb40 {
margin-bottom:40px
}

.mb45 {
margin-bottom:45px
}

.mb50 {
margin-bottom:50px
}

.ml5 {
margin-left:5px
}

.ml10 {
margin-left:10px
}

.ml15 {
margin-left:15px
}

.ml20 {
margin-left:20px
}

.ml25 {
margin-left:25px
}

.ml30 {
margin-left:30px
}

.mtn {
margin-top:0
}

.mrn {
margin-right:0
}

.mbn {
margin-bottom:0
}

.mln {
margin-left:0
}

.p5 {
padding:5px
}

.p10 {
padding:10px
}

.p15 {
padding:15px
}

.p20 {
padding:20px
}

.p25 {
padding:25px
}

.p30 {
padding:30px
}

.pt5 {
padding-top:5px
}

.pt10 {
padding-top:10px
}

.pt15 {
padding-top:15px
}

.pt20 {
padding-top:20px
}

.pt25 {
padding-top:25px
}

.pt30 {
padding-top:30px
}

.pr5 {
padding-right:5px
}

.pr10 {
padding-right:10px
}

.pr15 {
padding-right:15px
}

.pr20 {
padding-right:20px
}

.pr25 {
padding-right:25px
}

.pr30 {
padding-right:30px
}

.pb5 {
padding-bottom:5px
}

.pb10 {
padding-bottom:10px
}

.pb15 {
padding-bottom:15px
}

.pb20 {
padding-bottom:20px
}

.pb25 {
padding-bottom:25px
}

.pb30 {
padding-bottom:30px
}

.pl5 {
padding-left:5px
}

.pl10 {
padding-left:10px
}

.pl15 {
padding-left:15px
}

.pl20 {
padding-left:20px
}

.pl25 {
padding-left:25px
}

.pl30 {
padding-left:30px
}

.ptn {
padding-top:0
}

.prn {
padding-right:0
}

.pbn {
padding-bottom:0
}

.pln {
padding-left:0
}

.l-inline {
list-style:none;
overflow:hidden
}

.l-inline li {
float:left
}

.dg {
margin-left:-5px;
margin-right:-5px;
overflow:hidden
}


.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11 {
position:relative;
min-height:1px;
padding-left:5px;
padding-right:5px;
float:left;
margin-top:5px;
margin-bottom:5px
}

.col-12 {
width:100%
}

.col-11 {
width:91.66666667%
}

.col-10 {
width:83.33333333%
}

.col-9 {
width:75%
}

.col-8 {
width:66.66666667%
}

.col-7 {
width:58.33333333%
}

.col-6 {
width:50%
}

.col-5 {
width:41.66666667%
}

.col-4 {
width:33.33333333%
}

.col-3 {
width:25%
}

.col-2 {
width:16.66666667%
}

.col-1 {
width:8.33333333%
}

.ratio-1x1 {
position:relative;
width:100%
}

.ratio-1x1:before {
content:"";
display:block;
padding-top:100%
}

.ratio-content {
position:absolute;
top:0;
left:0;
right:0;
bottom:0
}

.circle {
border-radius:50%
}

h1,.h1 {
color:#253951;
font-size:2.78231em;
line-height:39.78px;
font-family:"Dosis",sans-serif;
font-weight:400;
margin-top:0
}

h2,.h2 {
color:#253951;
font-size:2.30769em;
line-height:39.78px;
font-family:"Dosis",sans-serif;
font-weight:300;
margin-top:0
}

h3,.h3 {
color:#253951;
font-size:2.30769em;
line-height:39.78px;
font-family:"Dosis",sans-serif;
font-weight:400;
margin-top:0
}

h4,.h4 {
color:#253951;
font-size:2.30769em;
line-height:39.78px;
font-family:"Dosis",sans-serif;
font-weight:300;
margin-top:0
}

h5,.h5 {
color:#253951;
font-size:1.92308em;
line-height:39.78px;
font-family:"Dosis",sans-serif;
font-weight:400;
margin-top:0
}

h6,.h6 {
color:#253951;
font-size:1.92308em;
line-height:39.78px;
font-family:"Dosis",sans-serif;
font-weight:300;
margin-top:0
}

.title-decorator {
border-bottom:1px solid #e1e1e1;
width:100%;
height:1.61538em;
margin-bottom:1.61538em
}

.title-decorator h1,.title-decorator h2,.title-decorator h3,.title-decorator h4,.title-decorator h5,.title-decorator h6 {
background:#fff;
padding-right:17px;
display:inline-block
}

ul,ol,ul label,ol label {
font-weight:300
}

ul li:hover,ol li:hover {
color:#000
}

.beta-list {
list-style:none
}

.beta-list li {
margin-bottom:10px
}

.beta-list i {
color:#f90;
font-size:10px;
padding-right:10px
}

strong {
color:#000
}

input[type="text"],input[type="email"],input[type="url"],textarea {
width:100%;
border:1px solid #e1e1e1;
height:37px;
padding:0 12px
}

textarea {
height:260px;
padding:12px
}

.form-block {
margin-bottom:10px
}

input[type="checkbox"] {
display:none
}

input[type="checkbox"]+label {
position:relative;
padding-left:21px;
width:100%
}

input[type="checkbox"]+label span:first-child {
width:13px;
height:13px;
display:inline-block;
margin-right:8px;
border:1px solid #e1e1e1;
position:absolute;
left:0;
bottom:3px
}

input[type="checkbox"]:checked+label {
color:#000
}

input[type="checkbox"]:checked+label span:first-child:before {
content:"\f00c";
font-family:'FontAwesome';
position:absolute;
left:1px;
top:-4px;
font-size:10px
}

.beta-select {
position:relative
}

.beta-select select {
position:absolute;
top:0;
left:0;
width:100%;
opacity:0
}

.beta-select span {
display:inline-block
}

.beta-select .beta-select-title {
padding-left:20px
}

.beta-select .beta-select-value {
padding-left:5px;
color:#000
}

.beta-select i {
padding-left:15px;
padding-right:20px;
font-size:10px
}

select {
box-shadow:none;
border:1px solid #e1e1e1;
cursor:pointer;
width:100%
}

.beta-select-primary {
display:inline-block;
border:1px solid #e1e1e1;
width:180px;
padding:7px 12px
}

.beta-select-primary .beta-select-title {
padding-left:0
}

.beta-select-primary i {
float:right;
line-height:inherit;
padding-left:0;
padding-right:0
}

.beta-highlight {
color:#fff;
display:inline-block;
padding-left:2px;
padding-right:2px
}

.beta-dropcap:first-letter {
float:left;
font-weight:700;
font-size:30px
}

.beta-dropcap-a:first-letter {
padding-right:5px;
padding-bottom:5px;
padding-top:8px
}

.beta-dropcap-b:first-letter {
color:#fff;
background:#3a5c83;
width:40px;
height:40px;
display:inline-block;
text-align:center;
line-height:40px;
margin-top:6px;
margin-right:5px;
margin-bottom:5px
}

sup {
position:relative;
color:#58a7c6;
top:-28px;
font-size:30px
}

sub {
color:#000;
font-size:20px;
position:relative;
left:-35px;
top:0
}

.beta-form-checkout select {
line-height:37px;
height:37px
}

.beta-form-checkout input {
margin-bottom:5px
}

.form-block {
margin-bottom:20px;
overflow:hidden
}

.form-block>* {
float:left
}

.form-block label {
width:200px;
font-weight:lighter
}

.form-block input,.form-block select,.beta-form-checkout textarea {
width:60%;
overflow:hidden
}

.form-block #apartment {
margin-left:200px
}

.beta-form-checkout textarea {
height:140px
}

@font-face {
font-family:'star';
src:url(../fonts/star.eot);
src:url(../fonts/star.eot?#iefix) format("embedded-opentype"),url(../fonts/star.woff) format("woff"),url(../fonts/star.ttf) format("truetype"),url(../fonts/star.svg#star) format("svg");
font-weight:400;
font-style:normal
}

.white {
color:#fff
}

.beta-relative {
position:relative
}

.bg-gray {
background-color:#f6f6f6
}

.color-gray {
color:#a3a2a2
}

.color-black {
color:#000
}

.h164 {
height:164px
}

.font-large {
font-size:15px
}

a i {
color:#f90;
font-size:10px;
padding-left:5px;
padding-right:5px
}

.other-title {
line-height:30px;
font-size:23px;
color:#000
}

.ml85 {
margin-left:85px
}

.beta-circle {
width:75px;
height:75px;
text-align:center;
line-height:75px;
border-radius:50%;
background-color:#3a5c83;
color:#fff;
font-size:22px;
display:inline-block
}

.bg-color4 {
background-color:#f90
}

.bg-color11 {
background-color:#57a7c6
}



/* ==========================================================================
    3. HEADER SECTION
============================================================================= */

#logo img {
margin-bottom:0px
}

.slogan {
display:inline-block;
width:130px;
padding:16px 0 10px 20px;
border-left:1px solid #d3d3d3;
margin-left:0px
}

.header-bottom {
border-top:1px solid #e3e3e3;
border-bottom:1px solid #e3e3e3
}
.color-div{background:#353535!important;}
#footer.color-div input{background: #3f3f3f;border:1px solid gray;}
.color-div a{color:lightgray;}

.header-top {
border-bottom:1px solid #e3e3e3;
height:47px
}
/* ==========================================================================
    4. NAVIGATION
============================================================================= */
.menu-beta {
height:47px
}

.menu-beta li {
border-right:1px solid #d3d3d3
}

.menu-beta li:first-child {
border-left:1px solid #d3d3d3
}

.menu-beta li>a {
padding:0 20px;
line-height:47px;
height:47px;
display:block
}

.menu-beta li .beta-select {
line-height:47px;
height:47px;
display:block
}

.menu-beta li select {
border:none;
height:46px;
display:block;
padding:0 20px
}

.menu-beta li a>i {
margin-right:3px;
color:#999da0
}

.menu-beta li a:hover i {
color:#000
}

.header-body {
padding:45px 0 50px
}

.main-menu {
height:60px;
display:table-cell;
vertical-align:middle;
font-weight:400
}

.main-menu ul {
list-style:none
}

.main-menu li.current-menu-item {
background:#3a5c83
}

.main-menu li.current-menu-item>a {
color:#fff;
text-transform:uppercase
}

.main-menu a {
font-family:"Open Sans",sans-serif;
font-size:16px
}

.main-menu li:hover>.sub-menu {
display:block
}
/* ==========================================================================
    4.1 SUBMENU
============================================================================= */

.sub-menu,.children {
display:none;
position:absolute;
top:100%;
left:0;
z-index:100;
list-style:none;
background:#fff
}

.sub-menu li,.children li {
float:none;
width:100%;
padding:0 40px 0 20px !important;
border-bottom:1px solid #e6e6e6
}

.sub-menu li:last-child,.children li:last-child {
border-bottom:none
}

.sub-menu li a,.children li a {
color:#505050;
display:block;
white-space:nowrap;
line-height:40px;
height:40px;
padding:0
}

.sub-menu li:hover,.children li:hover {
background:#3a5c83
}

.sub-menu li:hover a,.children li:hover a {
color:#fff
}

ul.sub-menu ul.sub-menu,ul.children ul.children {
display:none;
left:100%;
top:0
}

ul.sub-menu ul.sub-menu li a,ul.children ul.children li a {
color:#505050
}

ul.sub-menu ul.sub-menu li:hover>a,ul.children ul.children li:hover>a {
color:#fff
}

/* ==========================================================================
    5. CONTENT SECTION
============================================================================= */

.inner-header {
background-color:#3a5c83;
padding:20px 0
}

.inner-title {
color:#fff;
line-height:100%;
margin-bottom:0;
text-transform:capitalize
}

.content {
padding:60px 0
}
#content2 {
padding:60px 0
}

.content.space-top-none {
margin-top:0;
padding-top:0
}

.content.space-bottom-none {
margin-bottom:0;
padding-bottom:0
}
#content {
padding:60px 0
}

#content.space-top-none {
margin-top:0;
padding-top:0
}

#content.space-bottom-none {
margin-bottom:0;
padding-bottom:0
}

/* ==========================================================================
    5.1 SIDEBAR SECTION
============================================================================= */

.aside .widget {
margin-bottom:50px
}

.aside .widget-title {
font-size:16px;
text-transform:uppercase;
border:1px solid #e1e1e1;
padding-left:20px;
border-left:3px solid #606366;
color:#606366
}

.aside ul li {
padding:9px 20px;
border-bottom:1px dotted #e1e1e1
}

.aside ul li:last-child {
border-bottom:none
}

.widget-main {
margin-bottom:40px
}

.widget-main #searchform {
width:100%
}

.widget-main-body .tweet:first-child {
padding-top:0
}

.widget-main-title {
font-size:20px;
color:#979797;
margin-bottom:15px;
font-family:"Open Sans",sans-serif;
}


.widget-main-body ul {
list-style:none
}

.widget-main-body li {
margin-bottom:7px
}

.widget-main-body li:before {
content:"\f054";
color:#f90;
font-family:"FontAwesome";
padding-right:8px;
font-size:10px
}

.beta-lists>* {
padding:20px;
border-bottom:1px dotted #e1e1e1;
margin-top:0
}

.beta-lists>:last-child {
border-bottom:none;
padding-bottom:0
}

.recent-post {
margin-bottom:20px
}

.recent-post-title {
line-height:100%;
color:#000;
font-size:18px;
margin-bottom:0
}

.beta-checkout-help {
font-size:18px
}

.menu-underline a {
margin-left:25px;
text-decoration:underline
}
/* ==========================================================================
    6. SHOP SECTION
============================================================================= */

.your-order {
border:1px solid #e8e8e8;
padding-bottom:35px
}

.your-order>.your-order-head:first-child {
border-top:none
}

.your-order .beta-btn {
background-color:#3a5c83;
color:#fff!important
}

.your-order .beta-btn i {
color:#fff!important
}

.your-order-head {
height:55px;
background-color:#f8f8f8;
padding:0 40px;
border-top:1px solid #e8e8e8;
border-bottom:1px solid #e8e8e8
}

.your-order-head h5 {
font-size:24px;
color:#484747;
line-height:55px
}

.your-order-body {
padding:30px 40px
}

.your-order-item {
padding:30px 0;
border-bottom:1px solid #f8f8f8
}

.your-order-item.pbn {
padding-bottom:0
}

.your-order-item:last-child {
padding-bottom:0;
border-bottom:0
}

.your-order-body h5 {
margin-top:-10px
}

.your-order-info {
display:block;
margin-top:-5px;
margin-bottom:-2px
}

.payment_methods li {
margin-bottom:10px
}

.payment_methods li label {
font-size:15px;
color:#000
}

.payment_box {
background:#f8f8f8;
margin-left:17px;
margin-top:20px;
margin-bottom:30px;
padding:20px
}

.your-order-f18 {
font-size:18px;
margin-bottom:20px
}

.star-rating {
float:right;
overflow:hidden;
position:relative;
height:1em;
line-height:1em;
font-size:1em;
width:5.4em;
font-family:'star'
}

/* ==========================================================================
    6.1 WOOCOMMERCE PRODUCT RATTING
============================================================================= */


.star-rating:before {
content:"\73\73\73\73\73";
color:#c7c8c8;
float:left;
top:0;
left:0;
position:absolute
}

.star-rating span {
overflow:hidden;
float:left;
top:0;
left:0;
position:absolute;
padding-top:1.5em;
color:#f90
}

.star-rating span:before {
content:"\53\53\53\53\53";
top:0;
position:absolute;
left:0
}

.woocommerce-product-rating {
line-height:2em;
display:block
}

.woocommerce-product-rating .star-rating {
margin:.5em 4px 0 0;
float:left
}

/* ==========================================================================
    6.2 WOOCOMMERCE SINGEL ITEM
============================================================================= */

.single-item-options {
overflow:hidden
}

.single-item-options>* {
float:left
}

.single-item-options .add-to-cart {
margin-left:20px
}

.wc-select {
width:90px;
height:35px;
margin-right:10px
}

.beta-dropdown {
display:none
}

.beta-components {
overflow:hidden
}

.beta-components.space-right .beta-comp {
margin-right:7px
}

.beta-components.space-left .beta-comp {
margin-left:7px
}

.beta-comp {
float:left
}

/* ==========================================================================
    6.3 BETA CART
============================================================================= */
.cart {
border:1px solid #e1e1e1;
height:37px;
line-height:37px;
padding:0 10px;
cursor:pointer
}

.cart .beta-select {
position:static
}

.cart .beta-select i:first-child {
margin-right:3px;
color:#999da0;
padding-left:0;
padding-right:0;
font-size:16px
}

.cart .beta-select i:last-child {
margin-left:3px;
padding-left:0;
padding-right:0
}

.cart-body {
position:absolute;
right:15px;
z-index:100;
background:#fff;
border:1px solid #e1e1e1;
padding:0 10px 10px;
cursor:default
}

.cart-item {
position:relative;
padding:20px 0;
border-bottom:1px solid #e1e1e1
}

.cart-item-edit {
position:absolute;
top:20px;
right:16px;
background:#e1e1e1;
font-size:10px;
width:15px;
height:15px;
text-align:center;
line-height:15px
}

.cart-item-delete {
position:absolute;
top:20px;
right:0;
background:#e1e1e1;
font-size:10px;
width:15px;
height:15px;
text-align:center;
line-height:15px
}

.cart-item .media {
margin-top:0;
line-height:100%;
padding-right:70px
}

.cart-item .media .pull-left,.cart-item .media .pull-left .img {
width:50px
}

.cart-item .media-body>span {
display:block;
margin-bottom:5px
}

.cart-item-amount span {
color:#f90
}

.cart-total {
border-bottom:1px solid #e1e1e1;
font-size:15px;
height:50px;
line-height:50px
}

.cart-total-value {
color:#f90
}

.beta-tags {
margin-top:20px
}

.beta-tags a {
background:#f2f2f2;
display:inline-block;
padding:5px 10px;
margin-bottom:10px;
margin-right:6px
}

.beta-tags a:hover {
background:#3a5c83;
color:#fff
}

.beta-sales-item .pull-left {
margin-right:20px
}

.beta-sales-item img {
width:55px;
height:auto
}

.beta-sales-price {
font-size:20px;
color:#f90
}

/* ==========================================================================
    7. SEARCH FROM
============================================================================= */

#searchform {
position:relative;
width:218px;
display:inline-block
}

#searchform #s {
padding-right:25px
}
#searchform2 {
position:relative;
width:218px;
display:inline-block
}

#searchform2 #s {
padding-right:25px
}

#searchsubmit {
position:absolute;
right:6px;
top:0;
bottom:0;
border:none;
background:none
}
#searchsubmit2 {
position:absolute;
right:6px;
top:0;
bottom:0;
border:none;
background:none
}

/* ==========================================================================
    7.1 TWITTER
============================================================================= */

.tweet {
position:relative
}

.tweet i.fa {
position:absolute;
left:0;
top:20px;
font-size:17px;
line-height:27px;
color:#d1d1d1
}

.tweet-body {
padding-left:7px
}

.tweet-body a {
color:#f90
}

.tweet-body a:hover {
text-decoration:underline
}

.tweet-time {
color:#b0b0b0
}

.tweet-title {
line-height:110%;
font-size:18px;
margin-bottom:0
}

/* ==========================================================================
    8. BETA BANNER
============================================================================= */

.beta-banner {
position:relative;
overflow:hidden
}

.beta-banner-layer {
position:absolute;
opacity:0
}

.beta-banner h1,.beta-banner h2,.beta-banner h3,.beta-banner h4,.beta-banner h5,.beta-banner h6 {
color:#444
}

.beta-banner-a h1,.beta-banner-a h2,.beta-banner-a h3,.beta-banner-a h4,.beta-banner-a h5,.beta-banner-a h6,.beta-banner-a {
color:#8299af
}

.view-layer {
top:0;
left:0;
opacity:1
}

.beta-banner .banner-color {
color:#444
}

.beta-banner .banner-color:hover {
color:#444
}

.beta-banner-white {
color:#fff!important
}

/* ==========================================================================
    9. BETA PROMOBOX
============================================================================= */

.beta-promobox {
padding:35px 40px 25px;
background:#234
}

.beta-promobox h1,.beta-promobox h2,.beta-promobox h3,.beta-promobox h4,.beta-promobox h5,.beta-promobox h6 {
color:#818992
}

.beta-promobox-b {
background:#f90;
color:#fff
}

.beta-promobox-b h1,.beta-promobox-b h2,.beta-promobox-b h3,.beta-promobox-b h4,.beta-promobox-b h5,.beta-promobox-b h6 {
color:#fff
}

/* ==========================================================================
    10. BETA INSTAGRAM
============================================================================= */

#beta-instagram-feed {
overflow:hidden;
margin-left:-5px;
margin-right:-5px
}

#beta-instagram-feed a {
width:80px;
height:80px;
display:block;
float:left;
margin:0 5px 10px
}

#beta-instagram-feed a img {
width:80px
}

/* ==========================================================================
    11. BETA PRODUCTS DETAILS
============================================================================= */

.beta-products-details {
font-size:15px;
margin-bottom:17px
}

.beta-products-details .pull-left {
margin-top:10px
}

.beta-products-details a {
color:#3a5c83
}

.beta-products-details a:hover {
text-decoration:underline
}

.beta-products-details .sort-by {
display:inline-block;
padding-right:10px
}

.beta-products-details .beta-select {
font-size:13px
}

/* ==========================================================================
    11.1 SINGLE ITEM
============================================================================= */

.single-item {
position:relative
}

.single-item-header {
margin-bottom:20px
}

.single-item-title {
font-size:15px;
margin-bottom:5px
}

.single-item-price {
font-size:20px;
color:#000
}

.add-to-cart {
background-color:#3a5c83;
height:35px;
width:40px;
text-align:center;
display:inline-block;
margin-right:2px
}

.add-to-cart i {
font-size:22px;
color:#fff;
line-height:35px
}

.flash-del {
text-decoration:line-through;
margin-right:10px
}

.flash-sale {
color:#f90
}

/* ==========================================================================
    11.2 RIBBON
============================================================================= */

.ribbon-wrapper {
width:60px;
height:60px;
overflow:hidden;
position:absolute;
top:-3px;
right:-3px
}

.ribbon {
color:#fff;
text-align:center;
-webkit-transform:rotate(45deg);
-moz-transform:rotate(45deg);
-ms-transform:rotate(45deg);
-o-transform:rotate(45deg);
position:relative;
padding:4px 0;
left:1px;
top:4px;
width:80px;
text-transform:uppercase;
background-color:#3a5c83
}

.ribbon:before,.ribbon:after {
content:"";
border-top:3px solid #6e8900;
border-left:3px solid transparent;
border-right:3px solid transparent;
position:absolute;
bottom:-3px
}

.ribbon:before {
left:0
}

.ribbon:after {
right:0
}

.ribbon.sale {
background-color:#f90
}

/* ==========================================================================
    12. PRICE FILTER
============================================================================= */

.price-filter {
margin-top:30px
}

#price-filter-range {
margin-bottom:20px;
border:none;
background:#e7e7e7;
height:3px;
position:relative
}

#price-filter-range .ui-slider-range {
background:#c1c1c1;
position:absolute;
display:block;
height:inherit
}

#price-filter-range .ui-slider-handle {
background:#3a5c83;
width:11px;
height:11px;
border-radius:50%;
border:none;
display:block;
top:-4px;
position:absolute
}

.tp-banner-container {
position:relative
}

/* ==========================================================================
    13. AUDIO
============================================================================= */

.mejs-audio .mejs-controls{background:#fafafa !important;width:100%}
.mejs-audio .mejs-controls .mejs-duration,.mejs-audio .mejs-controls .mejs-currenttime{background:#fafafa !important;color:#9f9f9f !important}
.mejs-audio .mejs-controls{height:44px !important}
.mejs-audio .mejs-controls div{margin-top:6px!important;}
.mejs-audio .mejs-controls .mejs-button button{background:none !important;font-size:12px !important}
.mejs-audio .mejs-controls .mejs-button button:focus{outline:none !important}
.mejs-audio .mejs-controls .mejs-play button:before{content:"\f04b" !important;color:#505050 !important;font-family:"fontawesome"}
.mejs-audio .mejs-controls .mejs-pause button:before{content:"\f04c" !important;color:#505050 !important;font-family:"fontawesome"}
.mejs-audio .mejs-controls .mejs-mute button:before{content:"\f028" !important;color:#505050 !important;font-family:"fontawesome";font-size:15px !important}.mejs-audio .mejs-controls .mejs-unmute button:before{content:"\f026" !important;color:#505050 !important;font-family:"fontawesome";font-size:15px !important}.mejs-audio .mejs-controls .mejs-time-total{background:white !important;height:4px;margin-top:8px !important}
.mejs-audio .mejs-controls .mejs-time-total span:not(.mejs-time-float){height:4px}
.mejs-audio .mejs-controls .mejs-time-loaded,.mejs-audio .mejs-controls .mejs-horizontal-volume-total{background:#e9e9e9 !important}
.mejs-audio .mejs-controls .mejs-time-current,.mejs-audio .mejs-controls .mejs-horizontal-volume-current{background:#58a7c6 !important}
.mejs-audio .mejs-controls .mejs-time-rail span,.mejs-audio .mejs-controls .mejs-horizontal-volume-slider div{border-radius:0 !important}
.mejs-audio .mejs-controls .mejs-horizontal-volume-slider{margin-top:1px !important;float: right;
margin-top: -31px!important;
}
.mejs-audio .mejs-controls .mejs-horizontal-volume-slider div{height:4px !important}
/* ==========================================================================
    13.1 ICON CIRCLE
============================================================================= */

.icon-circle {
position:relative;
width:100%;
height:0;
padding-bottom:99%;
border-radius:50%;
color:#57a7c6;
border:1px solid #57a7c6;
font-size:50px;
margin-bottom:10px
}

.icon-circle i {
position:absolute;
left:0;
right:0;
top:50%;
margin-top:-25px;
text-align:center
}

/* ==========================================================================
    14. BLOG SECTION
============================================================================= */


.blog-item-date {
font-size:15px;
margin:20px 0 10px
}

.blog-item-b .blog-item-title {
line-height:110%;
margin-bottom:5px
}

.blog-item-b .blog-item-small-date {
margin-bottom:15px;
display:block
}

.beta-blog {
padding-bottom:40px;
margin-bottom:40px;
border-bottom:1px solid #e1e1e1
}

.beta-blog img {
width:100%
}

.beta-blog-header {
position:relative;
margin-bottom:5px
}

.beta-blog-type {
display:block;
color:#fff;
background:#f90;
text-align:center;
line-height:48px;
width:48px;
height:48px;
font-size:15px
}

.beta-blog-date {
display:block;
width:48px;
height:48px;
background-color:#3a5c83;
color:#fff;
text-align:center
}

.beta-blog-month {
text-transform:uppercase;
display:block;
line-height:100%;
padding-top:7px
}

.beta-blog-day {
display:block;
font-size:22px;
font-weight:400;
}
.media-body p a{font-weight:400;}
.color-blg-title {color:#008ed0;}

.beta-blog-title {
line-height:100%;
margin-bottom:5px
}

.beta-blog-title a {
color:#484747
}

.beta-blog-title a:hover {
color:#3a5c83
}

.beta-blog-2cols,.beta-blog-3cols,.beta-blog-4cols {
border-bottom:none;
padding-bottom:0
}

.beta-blog-2cols .beta-blog-content>a:first-child {
margin-bottom:20px;
display:block
}

.beta-blog-4cols .beta-blog-title {
margin-bottom:20px
}

.beta-blog-content-preview {
position:relative;
margin-bottom:20px
}

.beta-blog-content-details {
position:absolute;
top:0;
left:0
}

.beta-audio {
margin-bottom:10px;
margin-top:20px
}

.beta-blog-b-preview-container-all {
position:relative
}

.beta-blog-b-preview-container {
position:absolute;
top:0;
left:0
}

.beta-blog-b-preview {
margin-left:70px
}

.beta-blog-c-preview-container-all {
position:relative;
margin-bottom:20px
}

.beta-blog-c-preview-container {
position:absolute;
top:0;
left:0
}

.beta-blog-c-preview {
margin-left:70px
}

.beta-blog-d-preview-container-all {
position:relative;
margin-bottom:20px
}

.beta-blog-d-preview-container {
position:absolute;
top:0;
left:0
}

.beta-blog-d-preview {
margin-left:70px
}

.beta-blog.beta-blog-single {
border-bottom:none
}

.beta-blog-from {
padding:30px 20px
}

.blog-item-white {
background:rgba(255,255,255,0.3);
border:1px solid rgba(255,255,255,0.5);
color:#fff;
padding:25px 20px
}

.blog-item-white-date {
font-size:15px;
padding-bottom:10px
}

.blog-item-white .other-title {
color:#fff
}

.blog-item-white i {
color:#fff
}

.beta-pagination a {
display:inline-block;
width:40px;
height:40px;
border:1px solid #e1e1e1;
text-align:center;
line-height:40px
}

/* ==========================================================================
    14.1 BETA PAGINATION
============================================================================= */

.beta-pagination a i {
color:#606366
}

.beta-pagination a:hover,.beta-pagination a:hover i {
color:#3a5c83
}

.beta-pagination .is-active {
background:#fafafa;
border:1px solid #fafafa
}

/* ==========================================================================
    15. BETA TESTIMONIALS
============================================================================= */

.beta-testimonials .beta-arrow-left,.beta-testimonials .beta-arrow-right {
top:70px
}

.beta-testimonials-slider {
font-family:"Dosis";
background:#58a7c6;
padding:40px 90px 40px 35px;
font-size:20px;
color:#fff;
line-height:30px
}

.beta-slides-quote {
text-align:center
}

.beta-slides-quote .beta-arrow-left,.beta-slides-quote .beta-arrow-right {
margin-top:30px;
display:inline-block;
position:relative;
width:38px;
height:38px;
border:1px solid #e1e1e1;
line-height:36px
}

.beta-slides-quote .beta-arrow-left i,.beta-slides-quote .beta-arrow-right i {
font-size:10px
}

.beta-slides-quote .beta-arrow-left:hover i,.beta-slides-quote .beta-arrow-right:hover i {
color:#f90
}

/* ==========================================================================
    16. BETA SLIDES TWITTER
============================================================================= */


.beta-slides-twitter {
text-align:center;
color:#fff
}

.beta-slides-twitter h5 {
color:#fff;
line-height:110%
}

.beta-slides-twitter h5 a {
color:#3a5c83
}

.beta-slides-twitter h5 a:hover {
text-decoration:underline
}

.beta-slides-twitter .beta-arrow-left,.beta-slides-twitter .beta-arrow-right {
margin-top:30px;
display:inline-block;
position:relative;
width:38px;
height:38px;
border:1px solid #3a5c83;
line-height:36px
}

.beta-slides-twitter .beta-arrow-left i,.beta-slides-twitter .beta-arrow-right i {
font-size:10px;
color:#3a5c83
}

.beta-slides-twitter .beta-arrow-left:hover i,.beta-slides-twitter .beta-arrow-right:hover i {
color:#fff
}

.beta-filter a {
display:inline-block;
padding:5px 15px
}

.beta-filter a.is-active {
border:1px solid #61acc9
}

.beta-filter-body {
margin-top:25px
}

.beta-filter-body li {
display:inline-block;
float:left;
height:320px;
position:relative;
overflow:hidden;
-webkit-transition:all .2s ease-in-out;
-moz-transition:all .2s ease-in-out;
-o-transition:all .2s ease-in-out;
-ms-transition:all .2s ease-in-out;
transition:all .2s ease-in-out
}

/* ==========================================================================
    17. BETA MEDIA QUERY
============================================================================= */

@media only screen and (min-width: 0px) {
.beta-filter-body li {
width:100%
}
}

@media only screen and (min-width: 768px) {
.beta-filter-body li {
width:33.33333%
}
}

@media only screen and (min-width: 940px) {
.beta-filter-body li {
width:20%
}
}

.beta-filter-body a {
width:100%;
height:100%;
display:block
}

.beta-filter-body img {
width:100%;
min-height:100%
}

.beta-filter-body.latest-works li {
height:270px
}

.is-item-hidden {
opacity:.3
}

.beta-filter-body.portfolio-page li {
width:24%;
margin:.5%;
border-radius:50%;
height:273px
}

.beta-filter-body.portfolio-page .work-item-over {
border-radius:50%
}

.beta-filter-body.portfolio-page .work-item-actions {
position:absolute;
top:50%;
left:50%;
-webkit-transform:translate(-50%,-50%);
transform:translate(-50%,-50%)
}

.portfolio-type-b {
border-radius:0!important
}

.portfolio-type-b img {
height:auto!important;
min-height:inherit!important
}

.portfolio-type-b .work-item-over {
border-radius:0!important
}

.portfolio-page a.beta-btn {
width:auto!important;
display:inline-block
}

.portfolio-table tr:first-child th,.portfolio-table tr:first-child td {
border-top:none
}

.portfolio-table tr:last-child th,.portfolio-table tr:last-child td {
border-bottom:none
}

.portfolio-table tr th {
color:#3d3d3d
}

.beta-block {
position:relative
}

.beta-block:hover .beta-block-over {
opacity:1
}

.beta-block-over {
opacity:0;
position:absolute;
z-index:10;
width:100%;
height:100%;
opacity:0;
-webkit-transition:all .2s ease-in-out;
-moz-transition:all .2s ease-in-out;
-o-transition:all .2s ease-in-out;
-ms-transition:all .2s ease-in-out;
transition:all .2s ease-in-out
}

.beta-block .over-img-active {
-webkit-transition:all .2s ease-in-out;
-moz-transition:all .2s ease-in-out;
-o-transition:all .2s ease-in-out;
-ms-transition:all .2s ease-in-out;
transition:all .2s ease-in-out
}

.beta-block:hover .over-img-active {
-webkit-transform:scale(1.3,1.3) rotate(15deg);
transform:scale(1.3,1.3) rotate(15deg)
}

.over-a {
background-color:rgba(255,255,255,0.7)
}

.over-a .over-details {
text-align:center;
position:absolute;
left:0;
right:0;
top:50%;
-webkit-transform:translateY(-50%);
transform:translateY(-50%)
}

.over-a .over-details h5 {
line-height:100%;
margin-bottom:0
}

.over-a .over-more {
position:absolute;
bottom:0;
left:0;
width:35px;
height:35px;
display:block;
background:#f90;
text-align:center
}

.over-a .over-more i {
color:#fff;
font-size:13px;
line-height:35px
}

.over-b {
background-color:rgba(255,255,255,0.7)
}

.over-b .over-details {
position:absolute;
top:20px;
left:20px
}

.over-b .over-details h5 {
line-height:100%;
margin-bottom:0
}

.over-b .over-more {
position:absolute;
bottom:10px;
right:10px;
display:inline-block
}

#beta-map {
height:640px
}

.beta-form input,.beta-form textarea {
text-align:center;
width:100%
}

.beta-breadcrumb,.beta-breadcrumb a {
color:#fff
}

.beta-breadcrumb a:hover {
text-decoration:underline
}

.beta-calendar .ui-datepicker-header {
border:1px solid #e1e1e1;
height:38px;
line-height:38px;
overflow:hidden;
margin-bottom:10px
}

.beta-calendar .ui-datepicker-prev {
float:left;
padding-left:10px;
cursor:pointer
}

.beta-calendar .ui-datepicker-next {
float:right;
padding-right:10px;
cursor:pointer
}

.beta-calendar .ui-datepicker-title {
text-align:center
}

.beta-calendar .ui-datepicker-calendar {
width:100%
}

.beta-calendar .ui-datepicker-calendar thead {
margin-bottom:15px
}

.beta-calendar .ui-datepicker-calendar th {
text-align:center
}

.beta-calendar .ui-datepicker-calendar a {
margin:1px;
line-height:35px;
text-align:center;
display:block;
background:#f7f7f7;
width:35px;
height:35px
}

.beta-calendar .ui-datepicker-calendar a.ui-state-active {
background-color:#e8e8e8
}

.beta-calendar .ui-datepicker-calendar a:hover {
background-color:#3a5c83;
color:#fff
}

.beta-author-social i {
font-size:16px;
color:#999da0
}

.beta-author-social a:hover i {
color:#f90
}

.comment.depth-1 {
margin-left:0
}

.comment.depth-2 {
margin-left:60px
}

.comment.depth-3 {
margin-left:120px
}

.comment.depth-4 {
margin-left:180px
}

.comment.depth-5 {
margin-left:240px
}

.aside-menu {
list-style:none;
background:#f8f8f8;
border:1px solid #e5e4e4;
padding:25px
}

.aside-menu li {
padding:10px 0;
border-bottom:1px solid #e5e4e4
}

.aside-menu li:last-child {
border-bottom:none
}

.aside-menu li a {
color:#3d3d3d
}

.aside-menu li a:hover {
color:#909090
}

.aside-menu li.is-active a {
color:#909090
}

.history-navigation {
position:relative;
margin-bottom:55px
}

.history-navigation:before {
content:"";
height:1px;
background:#e1e1e1;
position:absolute;
width:100%;
top:50%
}

.history-navigation a {
display:inline-block;
width:100px;
height:100px;
position:relative;
background-color:#fff;
margin-right:69px;
border:2px solid #57a7c6;
color:#000
}

.history-navigation a.active {
background-color:#57a7c6;
color:#fff
}

.history-navigation a:last-child {
margin-right:0
}

.history-navigation a span {
font-size:23px
}

.beta-partners img {
margin:0 25px
}

.woocommerce-tabs ul.tabs {
list-style:none;
padding-left:5px;
margin-bottom:-1px;
overflow:hidden;
position:relative;
z-index:1
}

.woocommerce-tabs ul.tabs li {
border:1px solid #e1e1e1;
display:inline-block;
position:relative;
z-index:0;
margin:0 -5px;
background-color:#f6f6f6;
border:1px solid #f6f6f6
}

.woocommerce-tabs ul.tabs li a {
display:inline-block;
text-decoration:none;
padding:15px 35px
}

.woocommerce-tabs ul.tabs li.active {
background:#fff;
z-index:2;
border-bottom:1px solid #fff
}

.woocommerce-tabs .panel {
margin:0 0 2em;
padding:30px 30px 20px;
border:1px solid #f6f6f6;
border-radius:0
}

table.shop_attributes {
border:0;
border-top:1px dotted #f1f1f1;
margin-bottom:1.618em;
width:100%
}

table.shop_attributes th {
width:150px;
font-weight:700;
padding:8px;
border-top:0;
border-bottom:1px dotted #eee;
margin:0;
line-height:1.5em
}

table.shop_attributes td {
font-style:italic;
padding:0;
border-top:0;
border-bottom:1px dotted #f1f1f1;
margin:0;
line-height:1.5em
}

table.shop_attributes td p {
margin:0;
padding:8px 0
}

table.shop_attributes .alt td,table.shop_attributes .alt th {
background:rgba(0,0,0,0.025)
}

table.shop_table {
border:1px solid #f1f1f1;
margin:0 -1px 24px 0;
text-align:left;
width:100%;
border-collapse:separate
}

table.shop_table th {
line-height:55px;
text-align:center;
height:55px;
background-color:#f6f6f6;
font-size:18px;
font-family:Dosis;
border-right:1px solid #eee
}

table.shop_table td {
border-top:1px solid #f1f1f1;
border-right:1px solid #f1f1f1;
padding:38px;
text-align:center;
vertical-align:middle
}

table.shop_table td small {
font-weight:400
}

table.shop_table td select {
width:80px;
height:40px
}

table.shop_table td .amount {
font-size:22px;
color:#000;
font-family:Dosis
}

table.shop_table th:last-child,table.shop_table td:last-child {
border-right:none
}

table.shop_table td.product-status {
color:#000
}

table.shop_table td.product-price .amount {
color:#a3a2a2
}

table.shop_table tfoot td,table.shop_table tfoot th {
border-top:1px solid #f1f1f1;
text-align:left
}

table.shop_table tfoot td .coupon,table.shop_table tfoot th .coupon {
overflow:hidden;
margin:15px 0
}

table.shop_table tfoot td .coupon input,table.shop_table tfoot th .coupon input {
width:190px
}

table.shop_table tfoot td .coupon>*,table.shop_table tfoot th .coupon>* {
float:left
}

table.shop_table tfoot td .coupon label,table.shop_table tfoot th .coupon label {
font-size:22px;
margin-right:35px;
font-family:Dosis;
font-weight:inherit
}

table.shop_table tfoot td .coupon input,table.shop_table tfoot th .coupon input {
margin-right:5px
}

table.shop_table tfoot td .beta-btn,table.shop_table tfoot th .beta-btn {
height:37px;
background-color:#3a5c83;
color:#fff
}

table.shop_table tfoot td .beta-btn i,table.shop_table tfoot th .beta-btn i {
color:#fff
}

table.shop_table tfoot td .coupon+.beta-btn,table.shop_table tfoot th .coupon+.beta-btn {
margin-left:100px
}

table.my_account_orders {
font-size:.85em
}

table.my_account_orders th,table.my_account_orders td {
padding:4px 8px;
vertical-align:middle
}

table.my_account_orders .button {
white-space:nowrap
}

table.my_account_orders .order-actions {
text-align:right
}

table.my_account_orders .order-actions .button {
margin:.125em 0 .125em .25em
}

td.product-name .media-body {
text-align:left
}

.table-title {
margin-bottom:5px;
color:#000;
line-height:100%
}

.table-option {
margin-bottom:-5px;
color:#070707
}

.table-edit {
color:#009cd5;
margin-top:10px;
display:inline-block
}

.table-edit:hover {
text-decoration:underline;
color:#009cd5
}

td.product-quantity {
min-width:80px
}

table.beta-shopping-cart-table .product-thumbnail {
min-width:32px
}

table.beta-shopping-cart-table th,table.beta-shopping-cart-table td {
vertical-align:middle
}

table.beta-shopping-cart-table a.remove i {
color:#6a6a6a;
font-size:17px
}

table.beta-shopping-cart-table a.remove:hover i {
color:#f90
}

table.beta-shopping-cart-table td.actions .coupon .input-text {
float:left;
-webkit-box-sizing:border-box;
-moz-box-sizing:border-box;
box-sizing:border-box;
padding:6px 6px 5px;
margin:0 4px 0 0;
outline:0;
line-height:1em
}

table.beta-shopping-cart-table input {
margin:0;
vertical-align:middle;
line-height:1em
}

.checkout .col-2 h3#ship-to-different-address {
float:left;
clear:none
}

.checkout .col-2 .notes {
clear:left
}

.checkout .col-2 .form-row-first {
clear:left
}

.checkout .create-account small {
font-size:11px;
line-height:13px;
font-weight:400
}

.checkout div.shipping-address {
padding:0;
clear:left;
width:100%
}

.checkout .shipping_address {
clear:both
}

#payment ul.payment_methods {
text-align:left;
padding:1em;
margin:0;
list-style:none outside
}

#payment ul.payment_methods li {
line-height:2em;
text-align:left;
margin:0;
font-weight:400
}

#payment ul.payment_methods li input {
margin:0 1em 0 0
}

#payment ul.payment_methods li img {
vertical-align:middle;
margin:-2px 0 0 .5em;
position:relative
}

#payment div.form-row {
padding:1em
}

#payment div.payment_box {
position:relative;
width:96%;
padding:1em 2%;
margin:1em 0;
font-size:.92em;
line-height:1.5em
}

#payment div.payment_box .wc-credit-card-form-card-number,#payment div.payment_box .wc-credit-card-form-card-expiry,#payment div.payment_box .wc-credit-card-form-card-cvc {
font-size:1.5em;
padding:8px;
background-repeat:no-repeat;
background-position:right
}

#payment div.payment_box .wc-credit-card-form-card-number.visa,#payment div.payment_box .wc-credit-card-form-card-expiry.visa,#payment div.payment_box .wc-credit-card-form-card-cvc.visa {
background-image:url(../images/icons/credit-cards/visa.png)
}

#payment div.payment_box .wc-credit-card-form-card-number.mastercard,#payment div.payment_box .wc-credit-card-form-card-expiry.mastercard,#payment div.payment_box .wc-credit-card-form-card-cvc.mastercard {
background-image:url(../images/icons/credit-cards/mastercard.png)
}

#payment div.payment_box .wc-credit-card-form-card-number.laser,#payment div.payment_box .wc-credit-card-form-card-expiry.laser,#payment div.payment_box .wc-credit-card-form-card-cvc.laser {
background-image:url(../images/icons/credit-cards/laser.png)
}

#payment div.payment_box .wc-credit-card-form-card-number.dinersclub,#payment div.payment_box .wc-credit-card-form-card-expiry.dinersclub,#payment div.payment_box .wc-credit-card-form-card-cvc.dinersclub {
background-image:url(../images/icons/credit-cards/diners.png)
}

#payment div.payment_box .wc-credit-card-form-card-number.maestro,#payment div.payment_box .wc-credit-card-form-card-expiry.maestro,#payment div.payment_box .wc-credit-card-form-card-cvc.maestro {
background-image:url(../images/icons/credit-cards/maestro.png)
}

#payment div.payment_box .wc-credit-card-form-card-number.jcb,#payment div.payment_box .wc-credit-card-form-card-expiry.jcb,#payment div.payment_box .wc-credit-card-form-card-cvc.jcb {
background-image:url(../images/icons/credit-cards/jcb.png)
}

#payment div.payment_box .wc-credit-card-form-card-number.amex,#payment div.payment_box .wc-credit-card-form-card-expiry.amex,#payment div.payment_box .wc-credit-card-form-card-cvc.amex {
background-image:url(../images/icons/credit-cards/amex.png)
}

#payment div.payment_box .wc-credit-card-form-card-number.discover,#payment div.payment_box .wc-credit-card-form-card-expiry.discover,#payment div.payment_box .wc-credit-card-form-card-cvc.discover {
background-image:url(../images/icons/credit-cards/discover.png)
}

#payment div.payment_box span.help {
font-size:11px;
line-height:13px;
font-weight:400
}

#payment div.payment_box .form-row {
margin:0 0 1em
}

#payment div.payment_box p:last-child {
margin-bottom:0
}

#payment div.payment_box:after {
content:"";
display:block;
border-right-color:transparent;
border-left-color:transparent;
border-top-color:transparent;
position:absolute;
top:-3px;
left:0;
margin:-1em 0 0 2em
}

.order_details {
margin:0 0 1.5em;
list-style:none
}

.order_details li {
float:left;
margin-right:2em;
text-transform:uppercase;
font-size:.715em;
line-height:1em;
padding-right:2em
}

.order_details li strong {
display:block;
font-size:1.4em;
text-transform:none;
line-height:1.5em
}

.order_details li:last-of-type {
border:none
}

ul.payment_methods,.woocommerce-page #payment ul.payment_methods {
*zoom:1;
text-align:left;
padding:1em;
margin:0;
list-style:none outside
}

.woocommerce #payment ul.payment_methods:before,.woocommerce #payment ul.payment_methods:after,.woocommerce-page #payment ul.payment_methods:before,.woocommerce-page #payment ul.payment_methods:after {
content:" ";
display:table
}

.woocommerce #payment ul.payment_methods:after,.woocommerce-page #payment ul.payment_methods:after {
clear:both
}

.woocommerce #payment ul.payment_methods li,.woocommerce-page #payment ul.payment_methods li {
line-height:2em;
text-align:left;
margin:0;
font-weight:400
}

.woocommerce #payment ul.payment_methods li input,.woocommerce-page #payment ul.payment_methods li input {
margin:0 1em 0 0
}

.woocommerce #payment ul.payment_methods li img,.woocommerce-page #payment ul.payment_methods li img {
vertical-align:middle;
margin:-2px 0 0 .5em;
position:relative
}

.cart-totals {
width:270px;
text-align:center;
border:1px solid #e8e8e8;
margin-top:25px
}

.cart-totals-row {
height:55px;
line-height:55px;
border-top:1px solid #e8e8e8;
font-size:18px;
text-align:left
}

.cart-totals .cart-totals-row:first-child {
background-color:#fdfdfd;
border-top:none
}

.cart-totals-row span:first-child {
padding:0 20px
}

.cart-totals-row span:last-child {
color:#a3a2a2
}

.cart-total-title {
background-color:#fdfdfd;
color:#000;
font-size:22px;
line-height:55px;
margin-bottom:0;
text-align:center
}

.shipping-calculator-button {
font-size:13px;
text-transform:uppercase;
color:#000
}

.beta-btn {
color:#fff;
border:1px solid  #57a7c6;
display:inline-block;
padding:6px 20px
}

.beta-btn:hover {
color:#fff
}

.beta-btn i.shift-left {
margin-left:-5px
}

.beta-btn.primary {
color:#606366;
padding:10px 20px;
line-height:100%
}

.beta-btn.primary:hover {
color:#fff;
background:#3a5c83
}

.beta-btn.primary i {
font-size:10px;
padding-left:5px;
color:#f90
}

.beta-btn-white {
border:none;
background:#fff
}

.beta-btn-asparagus {
border:none;
background:#465945
}

.beta-btn-dim {
border:none;
background:dimgrey
}

.beta-btn-dodger {
border:none;
background:#1e90ff
}

.beta-btn-denim {
border:none;
background:#1560bd
}

.beta-btn-dark-turquoise {
border:none;
background:#00ced1
}

.beta-btn-prussian {
border:none;
background:#003153
}

.beta-btn-puce {
border:none;
background:#c89
}

.beta-btn-rosy {
border:none;
background:#bc8f8f
}

.beta-btn-mauve {
border:none;
background:#966
}

.beta-btn-mountbatten {
border:none;
background:#997a8d
}

.beta-btn-medium-turquoise {
border:none;
background:#48d1cc
}

.beta-btn-medium-sea {
border:none;
background:#3cb371
}

.beta-btn-light-sea {
border:none;
background:#20b2aa
}

.beta-btn-slate {
border:none;
background:#789
}

.beta-btn-3d.beta-btn-asparagus {
border-bottom:3px solid #2f3c2f
}

.beta-btn-3d.beta-btn-dim {
border-bottom:3px solid #4f4f4f
}

.beta-btn-3d.beta-btn-dodger {
border-bottom:3px solid #0077ea
}

.beta-btn-3d.beta-btn-denim {
border-bottom:3px solid #10498f
}

.beta-btn-3d.beta-btn-dark-turquoise {
border-bottom:3px solid #009c9e
}

.beta-btn-3d.beta-btn-prussian {
border-bottom:3px solid #001320
}

.beta-btn-3d.beta-btn-puce {
border-bottom:3px solid #bd647a
}

.beta-btn-3d.beta-btn-rosy {
border-bottom:3px solid #a96f6f
}

.beta-btn-3d.beta-btn-mauve {
border-bottom:3px solid #7a5252
}

.beta-btn-3d.beta-btn-mountbatten {
border-bottom:3px solid #7f6173
}

.beta-btn-3d.beta-btn-medium-turquoise {
border-bottom:3px solid #2eb8b3
}

.beta-btn-3d.beta-btn-medium-sea {
border-bottom:3px solid #2f8d59
}

.beta-btn-3d.beta-btn-light-sea {
border-bottom:3px solid #188781
}

.beta-btn-3d.beta-btn-slate {
border-bottom:3px solid #5f6e7e
}

.beta-btn-3d {
position:relative;
bottom:0
}

.beta-btn-3d:active {
border-bottom:0;
bottom:-3px
}

.beta-btn-2d:hover {
opacity:.8
}

.beta-btn-asparagus i,.beta-btn-dim i,.beta-btn-dodger i,.beta-btn-denim i,.beta-btn-dark-turquoise i,.beta-btn-prussian i,.beta-btn-puce i,.beta-btn-rosy i,.beta-btn-mauve i,.beta-btn-mountbatten i,.beta-btn-medium-turquoise i,.beta-btn-medium-sea i,.beta-btn-light-sea i,.beta-btn-slate i {
color:#fff
}

.beta-btn-small {
padding:8px 20px;
font-size:14px
}

.beta-btn-medium {
padding:10px 20px;
font-size:16px
}

.beta-btn-large {
padding:12px 20px;
font-size:19px
}

.icon-box h5 {
line-height:100%;
margin-bottom:20px
}

.icon-box .pull-left {
color:#57a7c6
}

.icon-box-a .pull-left {
font-size:25px;
margin-right:17px
}

.icon-box-b {
text-align:center
}

.icon-box-b .pull-left {
float:none!important;
font-size:64px;
width:160px;
height:160px;
line-height:160px;
border-radius:50%;
margin:0 auto;
background-color:#fff
}

.icon-box-b .media-body {
background-color:#fff;
padding:80px 40px 40px;
margin-top:-80px
}

.icon-box-c {
text-align:center
}

.icon-box-c .pull-left {
float:none!important;
font-size:64px;
margin:0 auto 35px
}

.icon-box-c .media-body {
padding:0 40px 40px
}

.icon-box-d {
text-align:center
}

.icon-box-d .pull-left {
float:none!important;
font-size:25px;
margin:0 auto 30px
}

.icon-box-d .media-body {
padding:0 40px 40px
}

.icon-box-d h5 {
font-size:23px
}

.icon-box-e {
text-align:center
}

.icon-box-e .pull-left {
float:none!important;
font-size:100px;
margin:0 auto 35px
}

.icon-box-e .pull-left i {
top:50%;
margin-top:-50px
}

.icon-box-f .icon-box-icon {
width:105px;
height:105px;
position:relative;
background-color:#fff
}

.icon-box-f .icon-box-icon i {
font-size:30px;
color:#57a7c6
}

.icon-box-g {
border:1px solid #f6f6f6;
text-align:center
}

.icon-box-g .icon-box-icon {
font-size:30px;
color:#cacaca;
margin-bottom:20px
}

.icon-box-body {
padding:50px 35px 0
}

.icon-box-caption {
position:relative;
background-color:#f6f6f6
}

.icon-box-caption h5 {
margin-bottom:0;
padding:20px 0
}

.icon-box-g:hover .icon-box-icon {
color:#57a7c6
}

.icon-box-g:hover .icon-box-caption {
background-color:#57a7c6;
-webkit-transition:all .2s ease-in-out;
-moz-transition:all .2s ease-in-out;
-o-transition:all .2s ease-in-out;
-ms-transition:all .2s ease-in-out;
transition:all .2s ease-in-out
}

.icon-box-g:hover .icon-box-caption h5 {
color:#fff;
-webkit-transition:all .2s ease-in-out;
-moz-transition:all .2s ease-in-out;
-o-transition:all .2s ease-in-out;
-ms-transition:all .2s ease-in-out;
transition:all .2s ease-in-out
}

.icon-box-g:hover .indicator-top-small {
border-color:transparent transparent #57a7c6;
-webkit-transition:all .2s ease-in-out;
-moz-transition:all .2s ease-in-out;
-o-transition:all .2s ease-in-out;
-ms-transition:all .2s ease-in-out;
transition:all .2s ease-in-out
}

.beta-person {
background:#fff
}

.beta-person-body {
padding:20px 20px 25px;
position:relative
}

.beta-person-body h5 {
line-height:100%;
margin-bottom:0
}

.media-body.beta-person-body {
padding-top:0!important
}

.about-person {

display:block;
position:relative
}

.about-person:hover .about-person-over {
opacity:1
}

.about-person-over {
background:rgba(255,255,255,0.7);
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
opacity:0;
-webkit-transition:all .2s ease-in-out;
-moz-transition:all .2s ease-in-out;
-o-transition:all .2s ease-in-out;
-ms-transition:all .2s ease-in-out;
transition:all .2s ease-in-out
}

.about-details {
position:absolute;
left:0;
right:0;
bottom:5px
}

.about-details h5 {
margin-bottom:0;
line-height:100%
}

.beta-slider {
position:relative
}

.beta-arrow-left {
position:absolute;
left:0;
z-index:10
}

.beta-arrow-right {
position:absolute;
right:0;
z-index:10
}

.beta-arrow-left i,.beta-arrow-right i {
font-size:30px;
color:#444
}

.bx-viewport {
height:auto!important
}

.beta-pager {
width:10px;
position:absolute;
top:50%;
right:20px;
-webkit-transform:translateY(-50%);
transform:translateY(-50%);
z-index:9;
text-align:center
}

.beta-pager a {
display:inline-block;
margin-bottom:0
}

.beta-pager-item {
display:block;
border-radius:50%;
width:8px;
height:8px;
background:#fff
}

.beta-pager .active .beta-pager-item {
background:rgba(255,255,255,0.7);
border:1px solid #fff;
width:10px;
height:10px
}

.beta-pager-gallery {
margin-left:-6px;
margin-right:-6px;
display:inline-block
}

.beta-pager-gallery a {
display:inline-block;
width:148px;
height:110px;
margin:5px;
border:2px solid transparent;
position:relative
}

.beta-pager-gallery a.active {
border:2px solid #f90
}

.beta-pager-gallery a img {
position:absolute;
width:auto;
height:auto;
min-width:100%;
min-height:100%;
left:0;
top:0
}

.work-item {
position:relative
}

.work-item:hover .work-item-over {
opacity:1
}

.work-item-over {
position:absolute;
width:100%;
height:100%;
background-color:rgba(87,167,198,0.8);
color:#fff;
text-align:center;
opacity:0;
-webkit-transition:all .6s ease-out;
transition:all .6s ease-out
}

.work-item-over:before {
content:"";
width:0;
height:0;
border-style:solid;
border-width:180px 320px 0 0;
border-color:rgba(255,255,255,0.3) transparent transparent;
position:absolute;
top:0;
left:0
}

.work-item-title {
margin-top:30%
}

.work-item-categories {
text-transform:uppercase;
margin-bottom:15px
}

.work-item-actions {
overflow:hidden
}

.work-item-actions a {
width:55px;
height:55px;
display:inline-block;
background:#fff
}

.work-item-actions a i {
font-size:22px;
color:#555;
line-height:55px
}

.work-item-actions a:hover {
background:#57a7c6
}

.work-item-actions a:hover i {
color:#fff
}

.panel-default {
border-radius:0!important;
border:1px solid #e1e1e1!important
}

.panel-default>.panel-heading {
background:none;
padding:0
}

.panel-default>.panel-heading .panel-title {
font-size:18px;
line-height:20px;
padding:0
}

.panel-default>.panel-heading .panel-title a {
padding:13px 40px 13px 15px;
width:100%;
height:100%;
display:block;
position:relative
}

.panel-default>.panel-heading .panel-title a:hover .accordion-circle {
border:1px solid #3a5c83
}

.panel-default>.panel-heading .panel-title a>i {
font-size:20px;
color:#999da0
}

.panel-default>.panel-heading .panel-title a:hover i {
color:#3a5c83
}

.accordion-circle {
display:block;
width:30px;
height:30px;
border-radius:50%;
border:1px solid #e1e1e1;
position:absolute;
right:5px;
top:50%;
margin-top:-15px;
text-align:center
}

.accordion-circle i {
color:#e1e1e1;
line-height:30px
}

.panel-default>.panel-heading.beta-active-tab {
background-color:#3a5c83;
color:#fff!important
}

.panel-default>.panel-heading.beta-active-tab .panel-title {
color:#fff!important
}

.panel-default>.panel-heading.beta-active-tab .panel-title a:hover {
color:#fff!important
}

.panel-default>.panel-heading.beta-active-tab .accordion-circle {
border:1px solid #fff!important
}

.panel-default>.panel-heading.beta-active-tab i {
color:#fff!important
}

.panel-group.beta-accordion-b .panel-default {
border:none!important;
border-bottom:1px solid #e1e1e1!important
}

.panel-group.beta-accordion-b .panel-default>.panel-heading.beta-active-tab,.panel-group.beta-accordion-b .panel-default>.panel-heading.beta-active-tab .panel-title,.panel-group.beta-accordion-b .panel-default>.panel-heading.beta-active-tab .accordion-circle,.panel-group.beta-accordion-b .panel-default>.panel-heading.beta-active-tab i {
background:none!important;
color:#3a5c83!important
}

.panel-group.beta-accordion-b .panel-default>.panel-heading.beta-active-tab .panel-title a:hover {
color:#000!important
}

.beta-roundabout-container {
width:100%;
height:200px;
margin-top:200px;
margin-bottom:50px
}

.beta-roundabout {
list-style:none
}

.beta-roundabout li {
width:75%;
height:400px;
overflow:hidden
}

.beta-roundabout li img {
width:100%;
height:auto
}

.circliful {
position:relative
}

.circle-text,.circle-info,.circle-text-half,.circle-info-half {
width:100%;
position:absolute;
text-align:center;
display:inline-block;
top:50%;
-webkit-transform:translateY(-50%);
transform:translateY(-50%)
}

.circle-info,.circle-info-half {
color:#999
}

.circliful .fa {
margin:-10px 3px 0;
position:relative;
bottom:4px
}

.beta-blockquote {
padding:40px;
margin:10px 0
}

.beta-blockquote-b {
border:1px solid #e1e1e1;
padding-left:100px;
position:relative
}

.beta-blockquote-b .quote-icon {
position:absolute;
top:50px;
left:40px;
font-size:30px;
color:#999da0
}

.beta-quote {
margin-top:10px;
margin-bottom:10px
}

.beta-quote-left {
border-left:3px solid #57a7c6;
padding-left:20px
}

.beta-quote-right {
border-right:3px solid #57a7c6;
padding-right:20px
}

.beta-callout-box {
background:#f6f6f6
}

.beta-callout-box-a .pull-left {
width:270px;
height:240px;
line-height:240px;
background-color:#e8e8e8;
text-align:center;
font-size:100px;
color:#3a5c83
}

.beta-callout-box-a .media-body {
padding:45px 25px
}

.beta-callout-box-b .pull-left {
font-size:100px;
color:#f90;
float:none!important;
text-align:center
}

.beta-callout-box-b {
padding:30px 100px;
text-align:center
}

.beta-callout-box-c {
padding:65px 65px 30px
}

.beta-callout-box-d {
text-align:center;
padding:55px 140px;
color:#fff
}

.beta-callout-box-d h1 {
color:#fff
}

.beta-callout-box-d .beta-btn {
background:#fff
}

.beta-testimonial-body {
padding:30px;
border:1px solid #e1e1e1;
background:#f6f6f6;
position:relative;
margin-bottom:10px
}

.beta-testimonial-triangle {
position:absolute;
width:0;
height:0;
border-style:solid;
border-width:30px 33px 0 0;
border-color:#f6f6f6 transparent transparent;
left:38px;
bottom:-29px
}

.beta-testimonial-title {
font-size: 25px;
margin-bottom: 0;

}
.beta-testimonial-position{font-size: 16px;
line-height: 34px;}

.beta-testimonial.abs-testimonial {
color:#fff
}

.beta-testimonial.abs-testimonial .beta-testimonial-body {
background-color:rgba(255,255,255,0.3);
border:1px solid rgba(225,225,225,0.5)
}

.beta-testimonial.abs-testimonial .beta-testimonial-triangle {
border-color:rgba(255,255,255,0.3) transparent transparent;
bottom:-31px
}

.beta-features {
background:#f6f6f6;
position:relative
}

.beta-features i {
color:#3a5c83;
font-size:100px;
text-align:center;
vertical-align:middle
}

.indicator-bottom {
position:absolute;
bottom:-26px;
left:50%;
-webkit-transform:translateX(-50%);
-ms-transform:translateX(-50%);
transform:translateX(-50%);
width:0;
height:0;
border-style:solid;
border-width:26px 26px 0;
border-color:#f6f6f6 transparent transparent
}

.indicator-top {
position:absolute;
top:-26px;
left:50%;
-webkit-transform:translateX(-50%);
-ms-transform:translateX(-50%);
transform:translateX(-50%);
width:0;
height:0;
border-style:solid;
border-width:0 26px 26px;
border-color:transparent transparent #f6f6f6
}

.indicator-top-small {
position:absolute;
top:-10px;
left:50%;
-webkit-transform:translateX(-50%);
-ms-transform:translateX(-50%);
transform:translateX(-50%);
width:0;
height:0;
border-style:solid;
border-width:0 10px 10px;
border-color:transparent transparent #f6f6f6
}

.beta-pricing {
border:1px solid #e1e1e1
}

.beta-pricing th {
text-align:center
}

.beta-pricing td {
text-align:center;
padding:15px 0!important
}

.beta-pricing.table>thead>tr>th {
border-bottom:none
}

.beta-pricing thead {
font-family:Dosis
}

.table>thead>tr>th,.table>tbody>tr>th,.table>tfoot>tr>th,.table>thead>tr>td,.table>tbody>tr>td,.table>tfoot>tr>td {
border-bottom:1px solid #e1e1e1
}

.beta-pricing thead td {
background-color:#f6f6f6;
padding:25px 0 20px!important
}

.beta-pricing thead td span.price-currency {
color:#58a7c6;
font-size:35px
}

.beta-pricing thead td span.price-amount {
color:#58a7c6;
font-size:65px
}

tfoot {
background-color:#f6f6f6
}

.beta-pricing.table tfoot>tr>td {
padding:30px 0!important
}

tfoot td a {
background-color:#3a5c83;
color:#fff
}

tfoot td a i {
color:#fff
}

.beta-pricing.beta-pricing-b {
border-collapse:separate;
border-spacing:10px 0;
border:none
}

.beta-pricing.beta-pricing-b thead tr>th {
border-top:1px solid #e1e1e1!important
}

.beta-pricing.beta-pricing-b.table>tbody>tr>td,.beta-pricing.beta-pricing-b.table>thead>tr>td {
border-bottom:none!important
}

.beta-pricing.beta-pricing-b td,.beta-pricing.beta-pricing-b th {
border-left:1px solid #e1e1e1;
border-right:1px solid #e1e1e1
}

.beta-pricing.beta-pricing-b th h4 {
color:#fff
}

.beta-pricing.beta-pricing-b th:nth-child(1) {
background:#5c92cf
}

.beta-pricing.beta-pricing-b th:nth-child(2) {
background:#406590
}

.beta-pricing.beta-pricing-b th:nth-child(3) {
background:#24466e
}

.beta-pricing.beta-pricing-b th:nth-child(4) {
background:#1e2f43
}

.beta-pricing.beta-pricing-b tfoot td:nth-child(1) a {
background:#5c92cf
}

.beta-pricing.beta-pricing-b tfoot td:nth-child(2) a {
background:#406590
}

.beta-pricing.beta-pricing-b tfoot td:nth-child(3) a {
background:#24466e
}

.beta-pricing.beta-pricing-b tfoot td:nth-child(4) a {
background:#1e2f43
}

.beta-counter {
position:relative;
text-align:center
}

.beta-counter i {
font-size:45px;
color:#3a5c83
}

.beta-counter-value {
font-size:40px;
border-bottom:1px solid #e1e1e1;
line-height:75px;
font-family: "Dosis",sans-serif;
}

.beta-counter-title {
font-size:20px;
margin-top:20px;
font-family: "Dosis",sans-serif;
}

.beta-progress .progress {
box-shadow:none;
height:11px;
border-radius:5px;
margin-bottom:10px
}

.beta-progress .progress-bar {
background-color:#008ed0
}

.beta-progress p {
margin-bottom:5px
}

.beta-message {
background:#3a5c83;
padding:12px 25px;
color:#fff
}

.beta-message i {
font-size:40px;
color:#fff
}

.beta-message-text {
line-height:40px
}





.contact-info {
position:relative;
padding-left:35px
}

.contact-info i {
font-size:35px;
color:#f90;
position:absolute;
top:0;
left:0
}

.copyright {
background:#1a1a1a;
height:50px;
color:#fff;
line-height:50px;
overflow:hidden
}

.pay-options a {
display:inline-block;
margin-left:5px
}

.contact-title {
line-height:100%;
font-size:20px;
color:#000
}

.contact-form input {
width:60%
}

.contact-form textarea {
width:80%
}



@media (max-width: 1200px) {
.beta-banner-layer.beta-btn {
display:none
}

.history-navigation a {
margin-right:10px
}

.history-navigation:before {
background:none
}
}

@media (max-width: 993px) {
.beta-sales-item .pull-left {
float:none!important
}

.beta-person .pull-left {
float:none!important
}

.media-body.beta-person-body {
padding:20px 0!important
}
}

@media (max-width: 767px) {
.space {
line-height:5px
}

.space10 {
line-height:5px
}

.space15 {
line-height:5px
}

.space20 {
line-height:6px
}

.space25 {
line-height:7px
}

.space30 {
line-height:8px
}

.space35 {
line-height:9px
}

.space40 {
line-height:10px
}

.space45 {
line-height:11px
}

.space50 {
line-height:12px
}

.space55 {
line-height:13px
}

.space60 {
line-height:14px
}

.space65 {
line-height:15px
}

.space70 {
line-height:16px
}

.space75 {
line-height:17px
}

.space80 {
line-height:18px
}

.space85 {
line-height:19px
}

.space90 {
line-height:20px
}

.space95 {
line-height:25px
}

.space100 {
line-height:25px
}

.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11 {
width:100%
}

.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3,.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6,.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10,.col-md-10,.col-lg-10,.col-xs-11,.col-sm-11,.col-md-11,.col-lg-11,.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12 {
margin-bottom:10px
}

.container {
width:400px;
}

.content {
padding:15px 0
}

.main-content.pull-right {
float:none!important
}

.main-content.pull-left {
float:none!important
}

.beta-menu-toggle {
overflow:hidden;
height:40px;
line-height:40px
}

.beta-menu-toggle i {
font-size:25px;
color:#e1e1e1;
line-height:40px
}

.beta-menu-toggle-text {
float:left;
margin-top:13px;
line-height:100%;
margin-right:10px;
display:inline-block
}

.main-menu {
position:absolute;
z-index:1010;
width:79%
}

.main-menu>ul {
border:1px solid #e1e1e1;
box-shadow:0 1px 1px rgba(225,225,225,0.3);
display:none
}

.main-menu ul {
width:100%;
background:#fff
}

.main-menu ul li {
float:none;
width:100%
}

.main-menu ul.sub-menu {
display:block;
position:relative
}

.main-menu ul.sub-menu ul.sub-menu {
display:block;
position:relative;
left:0
}

.main-menu li.current-menu-item {
background-color:#fff!important;
color:#000!important
}

.main-menu li.current-menu-item>a {
color:#3a5c83;
font-weight:700
}

.sub-menu li:hover,.children li:hover {
background:#fff!important
}

.sub-menu li:hover a,.children li:hover a {
color:#000!important
}



.history-navigation {
display:block;
padding-bottom: 35px;
width: 65%;
margin: 0 auto;

}
.history-navigation a{width:20px; height:20px;color:transparent;
}
.history-navigation a.active span{position: absolute;
top: 35px;
color: #000;
left: 22px;}

.beta-blog {
padding-bottom:10px;
margin-bottom:10px
}

.form-block #apartment {
margin-left:0
}

.form-block input,.form-block select,.beta-form-checkout textarea {
width:100%
}

.contact-form textarea {
width:100%
}

.beta-callout-box-a .pull-left {
float:none!important;
width:100%
}

.beta-callout-box-a .media-body {
padding:10px
}

.beta-callout-box-b,.beta-callout-box-c,.beta-callout-box-d {
padding:10px
}

.beta-callout-box-c .pull-right,.beta-callout-box-c .pull-left {
float:none!important
}

.beta-callout-box-c .media {
width:100%
}

.beta-roundabout-container {
height:10px
}

.beta-person-body {
padding:20px 0
}

.abs-fullwidth .beta-person {
text-align:center;
padding:10px
}

.beta-person-full img {
width:100%
}

.beta-person-full .beta-person-body {
padding:10px
}

.xs-margin-top-150 {
margin-top:150px
}

.beta-filter-body.portfolio-page li {
width:100%
}

.col-sm-9.pull-right {
float:none!important
}

.widget-main {
margin-bottom:15px
}


hr {
margin-top:10px;
margin-bottom:10px
}

.mb50 {
margin-bottom:20px
}

.beta-btn {
margin-bottom:5px
}

.abs-fullwidth {
overflow:hidden
}

.comment.depth-1 {
margin-left:0
}

.comment.depth-2 {
margin-left:10px
}

.comment.depth-3 {
margin-left:20px
}

.comment.depth-4 {
margin-left:30px
}

.comment.depth-5 {
margin-left:40px
}

.beta-sales-item .pull-left {
float:left!important
}
}

@media (max-width: 450px) {
.main-menu{width:88%;}
}

/* ==========================================================================
    18. FOOTER SECTION
============================================================================= */

#footer {
background:#172431;
color:#7b8fa3;
padding:40px 0 50px
}

#footer a {
color:#7b8fa3
}
#footer.color-div a {color:gray}
#footer a:hover {
color:#f90
}
.color-div p{color:gray;}

#footer h4.widget-title {
color:#adbac8;
margin-bottom:22px
}
#footer.color-div h4.widget-title{color:gray;}

#footer ul {
list-style:none
}

#footer ul li {
margin-bottom:10px
}

#footer ul li i {
color:#f90;
margin-right:5px;
font-size:10px
}

#footer input {
background:#232f3c;
border:1px solid #4e5862;
margin-bottom:10px
}

#footer button {
background:none;
border:1px solid #4e5862;
color:#adbac8;
height:37px;
padding:0 15px
}
#footer.color-div button {border:1px solid gray;}

#footer button:hover {
color:#f90;
-webkit-transition:all .2s ease-in-out;
-moz-transition:all .2s ease-in-out;
-o-transition:all .2s ease-in-out;
-ms-transition:all .2s ease-in-out;
transition:all .2s ease-in-out
}

#footer button i {
margin-left:5px;
font-size:10px;
color:#f90
}


.clear{clear:both;}
@media (max-width: 767px) and (min-width: 100px){
html{overflow-x:hidden;}
#content{padding: 12px 0;}
}
@media (max-width: 400px) and (min-width: 100px){
.container{width:100%}
body{padding:0px!important; margin:0px!important; border:0px!important;}
html{overflow-x:hidden;}
}
@media (max-width: 416px) and (min-width: 100px){
.container{width:100%}
body{padding:0px!important; margin:0px!important; border:0px!important;}
html{overflow-x:hidden;}
}
@media (max-width: 406px) and (min-width: 100px){
.auto-width-left{width:59%;}
.auto-width-left ul li{width:50%;}
.auto-width-left ul li a{padding:0px;}
.auto-width-right{width:41%;}
.auto-width-right ul li a{padding:0px 4px;}
.pull-left.auto-width{width:auto!important;}
.beta-comp from{width:70%!important;}
a#logo img{max-width:45%!important;}
.beta-rotator canvas{width:98%!important;}
}
@media (max-width: 570px) and (min-width: 100px){
.beta-relative .pull-right{float:left!important;width:100%;}
.beta-components.space-left .beta-comp{margin-left:0px;}
.pull-right .beta-comp #searchform{width:100%;}
.beta-comp{width:100%;}
.beta-select i.fa-chevron-down{padding-top:10px; float:right;}
.cart{margin-top: 10px;}


}
@media (max-width: 1000px) and (min-width: 100px){

h2.beta-banner-layer.text-right{font-size: 1.78231em;}
p.beta-banner-layer.text-right{font-size:10px;top: 58px!important;}
}
@media (max-width: 1195px) and (min-width: 1000px){
.round-portfolio #portfolioitems{margin-left: 5%!important;}
}
@media (max-width: 999px) and (min-width: 996px){
.round-portfolio #portfolioitems{margin-left: 6%!important;}
}
@media (max-width: 995px) and (min-width: 400px){
.round-portfolio #portfolioitems{margin-left: 11%!important;}
}
@media (max-width: 399px) and (min-width: 332px){
.round-portfolio #portfolioitems{margin-left: 4.5%!important;}
}
@media (max-width: 331px) and (min-width: 100px){
.round-portfolio #portfolioitems{margin-left: 1%!important;}
}

@media (max-width: 990px) and (min-width: 767px){
#beta-instagram-feed a{width:25%!important; height:25%!important}
}

@media (max-width: 348px) and (min-width: 100px){
.slogan{width:100%; padding:0px; border:none; margin:0px; text-align:center;}
a#logo img{margin-left: 81px;}
}

@media (max-width: 400px) and (min-width: 100px){
.single-item-options select.wc-select{margin-bottom: 10px;}
}

@media (max-width: 989px) and (min-width: 100px){
.media, .media-body{overflow: visible!important;}
}


/**product**/
@media (max-width: 767px) and (min-width: 100px){
.single-item{width:100%;}
.single-item img{width:100%;}
.beta-banner img{width:100%;}
.blog-item-b img{width:100%;}
}
/**product**/
@media (max-width: 1021px) and (min-width: 774px){
.beta-about-person{width:120px!important; float:left!important;height:120px;}
.beta-about-person img{width:120px;}
span.about-person-over{width:120px; height:120px;}
}
@media (max-width: 773px) and (min-width: 100px){
.beta-about-person{width:45%!important; float:left!important;}
.beta-about-person img{width:100%;}

}
@media (max-width: 1700px) and (min-width: 1000px){
.isotope-item.col-sm-4{ width:33%;}
.isotope-item.col-sm-3{ width:24.8%;}

}
@media (max-width: 1700px) and (min-width: 769px){
ul.l-inline.ov{display:block!important;}

}
@media (max-width: 1199px) and (min-width: 100px){
.form-block #apartment {
margin-left: 0px;}
}
@media (max-width: 764px) and (min-width: 700px){
.work-item-title {
margin-top: 11%;
}
.portfolioitems-holder .work-item-actions a{left: 43%!important;}
}
@media (max-width: 699px) and (min-width: 422px){
.page-port .work-item-title {
margin-top: 11%;}
.page-port  .portfolioitems-holder .work-item-actions a{left: 40%!important;}
}
@media (max-width: 421px) and (min-width: 100px){
.page-port  .work-item-title {
margin-top: 11%;}
.page-port  .portfolioitems-holder .work-item-actions a{left: 35%!important;}
}



.icon-box-e:hover i{color:#f90;
-moz-transition: all 0.8s ease-out;
-o-transition: all 0.8s ease-out;
-ms-transition: all 0.8s ease-out;
transition: all 0.8s ease-out;}
.icon-box-e i {color:#57a7c6;
-moz-transition: all 0.10s ease-out;
-o-transition: all 0.10s ease-out;
-ms-transition: all 0.10s ease-out;
transition: all 0.10s ease-out;}
.icon-box-b:hover i{color:#f90;
-moz-transition: all 0.8s ease-out;
-o-transition: all 0.8s ease-out;
-ms-transition: all 0.8s ease-out;
transition: all 0.8s ease-out;}
.icon-box-b i {color:#57a7c6;
-moz-transition: all 0.10s ease-out;
-o-transition: all 0.10s ease-out;
-ms-transition: all 0.10s ease-out;
transition: all 0.10s ease-out;}
.icon-box-c:hover i{color:#f90;
-moz-transition: all 0.8s ease-out;
-o-transition: all 0.8s ease-out;
-ms-transition: all 0.8s ease-out;
transition: all 0.8s ease-out;}
.icon-box-c i {color:#57a7c6;
-moz-transition: all 0.10s ease-out;
-o-transition: all 0.10s ease-out;
-ms-transition: all 0.10s ease-out;
transition: all 0.10s ease-out;}
.icon-box-a:hover i{color:#f90;
-moz-transition: all 0.8s ease-out;
-o-transition: all 0.8s ease-out;
-ms-transition: all 0.8s ease-out;
transition: all 0.8s ease-out;}
.icon-box-a i {color:#57a7c6;
-moz-transition: all 0.10s ease-out;
-o-transition: all 0.10s ease-out;
-ms-transition: all 0.10s ease-out;
transition: all 0.10s ease-out;}
.ratio-1x1:hover i{color:#f90;
-moz-transition: all 0.8s ease-out;
-o-transition: all 0.8s ease-out;
-ms-transition: all 0.8s ease-out;
transition: all 0.8s ease-out;}
.ratio-1x1 i {color:#57a7c6;
-moz-transition: all 0.10s ease-out;
-o-transition: all 0.10s ease-out;
-ms-transition: all 0.10s ease-out;
transition: all 0.10s ease-out;}

.beta-person-full:hover img{-webkit-transition: all 0.4s ease-in-out;
   -moz-transition: all 0.4s ease-in-out;
   -o-transition: all 0.4s ease-in-out;
   -ms-transition: all 0.4s ease-in-out;
   transition: all 0.4s ease-in-out;
-webkit-transform: scale(1.8);
-moz-transform: scale(1.8);
-o-transform: scale(1.8);
-ms-transform: scale(1.8);
transform: scale(1.8);
-ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
filter: alpha(opacity=100);}
.beta-person-full img{-moz-transition: all 0.4s ease-in-out;
   -o-transition: all 0.4s ease-in-out;
   -ms-transition: all 0.4s ease-in-out;
   transition: all 0.4s ease-in-out;}
.bets-img-hover{width:100%; overflow:hidden;}


.blog-item:hover img{-webkit-transition: all 0.4s ease-in-out;
   -moz-transition: all 0.4s ease-in-out;
   -o-transition: all 0.4s ease-in-out;
   -ms-transition: all 0.4s ease-in-out;
   transition: all 0.4s ease-in-out;
-webkit-transform: scale(1.8);
-moz-transform: scale(1.8);
-o-transform: scale(1.8);
-ms-transform: scale(1.8);
transform: scale(1.8);
-ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
filter: alpha(opacity=100);}
.blog-item img{-moz-transition: all 0.4s ease-in-out;
   -o-transition: all 0.4s ease-in-out;
   -ms-transition: all 0.4s ease-in-out;
   transition: all 0.4s ease-in-out;}
   
.beta-timer{background: white;
float: left;
padding: 10px 14px;
position: absolute;
top: 31px;
left:0px;
font-family: "Dosis",sans-serif;font-size:15px;}
.beta-timer span{font-size:20px;}
.beta-timer:after{position: absolute;
top: 23px;
right: -20px;
content: '';
border-left: 10px solid white;
border-right: 10px solid transparent;
border-top: 10px solid transparent;
border-bottom: 10px solid transparent;}
.blog-item-title .other-title a{color:#000;}

.isotope-item {
    z-index: 2;
}

.isotope-hidden.isotope-item {
    pointer-events: none;
    z-index: 1;
}

.isotope,
.isotope .isotope-item {
    -webkit-transition-duration: 0.8s;
    -moz-transition-duration: 0.8s;
    -ms-transition-duration: 0.8s;
    -o-transition-duration: 0.8s;
    transition-duration: 0.8s;
}

.isotope {
    -webkit-transition-property: height, width;
    -moz-transition-property: height, width;
    -ms-transition-property: height, width;
    -o-transition-property: height, width;
    transition-property: height, width;
}

.isotope .isotope-item {
    -webkit-transition-property: -webkit-transform, opacity;
    -moz-transition-property:    -moz-transform, opacity;
    -ms-transition-property:     -ms-transform, opacity;
    -o-transition-property:      -o-transform, opacity;
    transition-property:         transform, opacity;
}

/**** disabling Isotope CSS3 transitions ****/

.isotope.no-transition,
.isotope.no-transition .isotope-item,
.isotope .isotope-item.no-transition {
    -webkit-transition-duration: 0s;
    -moz-transition-duration: 0s;
    -ms-transition-duration: 0s;
    -o-transition-duration: 0s;
}
#portfolioitems{width:101%;}
.portfolioitems-holder{overflow:hidden;}
.beta-filter ul#filters li{list-style:none; display: inline;}
.beta-filter ul#filters li.active a{display: inline-block;
padding: 5px 15px;border: 1px solid #61acc9;}

.portfolioitems-holder .work-item-actions a{display: block;
position: relative;
float: left;
left: 82px;}

.beta-portfolio-slider a.beta-arrow-left{top: -45px;}
.beta-portfolio-slider a.beta-arrow-right{top: -45px;}

.portfolioitems-holder.beta-overflow .work-item-actions a{display: block;
position: relative;
float: left;
left: 0px;}
.beta-filter-body.portfolio-page li{width: 270px;height: 270px;}
li.box-port-filter {display:inline;}

.box-port-filter p.work-item-actions{position: absolute;
top: 40%;
left: 35%;}
.nivo-prevNav {     
    text-indent: -9999px;
    width: 40px;
    height: 40px;
    right: 46px;
    background-color: #f6f6f6;
    background-image: url('../images/nivo-left.png');
    background-repeat: no-repeat;
    background-position: center;
    
    -webkit-transition: all 0.2s ease 0s;
    -moz-transition: all 0.2s ease 0s;
    -o-transition: all 0.2s ease 0s;
    -ms-transition: all 0.2s ease 0s;
    transition: all 0.2s ease 0s;
}

.nivo-nextNav {    
    text-indent: -9999px;
    width: 40px;
    height: 40px;
    right: 3px;
    background-color: #f6f6f6;
    background-image: url('../images/nivo-right.png');
    background-repeat: no-repeat;
    background-position: center;
    
    -webkit-transition: all 0.2s ease 0s;
    -moz-transition: all 0.2s ease 0s;
    -o-transition: all 0.2s ease 0s;
    -ms-transition: all 0.2s ease 0s;
    transition: all 0.2s ease 0s;
}

.nivo-prevNav:hover{
    background-image: url('../images/nivo-left-hover.png');
	background-color:#f90;
}

.nivo-nextNav:hover{
    background-image: url('../images/nivo-right-hover.png');
	background-color:#f90;
}
.nivoSlider{
    position: relative;  
    margin: 0 auto;
    height: auto;
    z-index: 100;
    overflow: hidden;
    float: left;
    background: #eee url('../images/loading.gif') no-repeat center;
    width: 100%;
    min-height: 180px;
}
.beta-related-port a{position:relative;}
.beta-related-port .work-item-actions{top: 40%;
position: relative;}
.abs-fullwidth{position:relative!important;}
.abs-fullwidth-height{display:none;}

/*********************/
/*menu*/
/*********************/

.main-menu>ul.l-inline> li> a{padding: 10px 22px;

    -webkit-font-smoothing: antialiased;
    transition: all 0.17s ease-in-out;
    -moz-transition: all 0.17s ease-in-out;
    -webkit-transition: all 0.17s ease-in-out;
    -o-transition: all 0.17s ease-in-out;
}
.main-menu li{position: relative;}
.main-menu ul.l-inline> li> a:hover{background: #3a5c83;color:white;
transition: all 0.17s ease-in-out;
    -moz-transition: all 0.17s ease-in-out;
    -webkit-transition: all 0.17s ease-in-out;
    -o-transition: all 0.17s ease-in-out;
    -webkit-backface-visibility: hidden;}
.sub-menu{z-index:999;top: 31px;
transition: all 0.17s ease-in-out;
    -moz-transition: all 0.17s ease-in-out;
    -webkit-transition: all 0.17s ease-in-out;
    -o-transition: all 0.17s ease-in-out;}
.main-menu li:hover>.sub-menu{-webkit-transform: rotateX(0deg);
      -moz-transform: rotateX(0deg);
      -ms-transform: rotateX(0deg);
      -o-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transition: -webkit-transform 0.4s, opacity 0.1s;
      -moz-transition: -moz-transform 0.4s, opacity 0.1s;
      -mos-transition: -mos-transform 0.4s, opacity 0.1s;
      -o-transition: -o-transform 0.4s, opacity 0.1s;
      transition: transform 0.4s, opacity 0.1s;
	  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
-moz-box-shadow:    0px 0px 20px 0px rgba(0, 0, 0, 0.12);
box-shadow:         0px 0px 20px 0px rgba(0, 0, 0, 0.12);}




.single-item-header{position:relative; overflow:hidden;max-height:275px;}
.ribbon{z-index:999;}
.single-item:hover a.add-to-cart{background: #f90;}
.single-item:hover img{-webkit-transform: scale(1.3, 1.3) ;
transform: scale(1.3, 1.3) ;}


.single-item img{-webkit-transition: all 0.2s ease-in-out;
-moz-transition: all 0.2s ease-in-out;
-o-transition: all 0.2s ease-in-out;
-ms-transition: all 0.2s ease-in-out;
transition: all 0.2s ease-in-out;}

/*********/
/**price table**/
/*********/

.col-sm-3.beta-pricing{padding:0px;}
.pri-title{background: #5c92cf;
width: 100%;
float: left;
color:white;
text-align:center;
}
.pri-title h4{color:white; padding: 8px 0px;
line-height: 39px;}
.beta-pricing span.pri-title h4{color:white;padding: 8px 0px 8px 0px;}
.beta-pricing span.pri-amo{padding: 60px 0px 35px 0px;
float: left;
width: 100%;
text-align: center;
background-color: #f6f6f6;
font-family: Dosis;
}
.beta-pricing span.price-amount{color: #58a7c6;
font-size: 65px;}
.beta-pricing span.price-currency{color: #58a7c6;
font-size: 35px;}
.beta-pricing span.beta-price-list{float:left;width:100%;background:white;text-align:center;border-top: 1px solid #e1e1e1;border-left: 1px solid #e1e1e1;border-right: 1px solid #e1e1e1;padding: 15px 0; float:left;}
.beta-pricing span.beta-price-button{float:left;width:100%;background:white;text-align:center;border-top: 1px solid #e1e1e1;padding: 30px 0;background-color: #f6f6f6; float:left;border-left: 1px solid #e1e1e1;border-right: 1px solid #e1e1e1;border-bottom: 1px solid #e1e1e1;}
.beta-pricing span.beta-price-button a{background: #406590;}

.main-menu ul li.active> a{background:#3a5c83; color:white!important;}
.sub-menu li.active, .children li.active{background:#3a5c83; color:white!important;}
.sub-menu li a, .children li a{font-size:14px;}
.sub-menu{width:240px;}
#logo{padding-right: 0px;}
.beta-highlight{background-color:#3a5c83;}
.bg-color10{background-color:#58a7c6;}
.parent-active>a{background:#3a5c83; color:white;}
.sub-menu li.parent-active, .children li.parent-active{background:#3a5c83; }
.sub-menu li.parent-active>a, .children li.parent-active>a{color:white!important;}
.tp-bullets.simplebullets.navbar{top: 40%;
width: 100%; left:0px!important; bottom:0px!important; margin-left:0px!important;
}
.tp-bullets.simplebullets.navbar{background:transparent!important; border:none;height:0px!important;display:none;}
.tp-bullets.simplebullets.navbar .bullet{display:none;}
.bullet{display:none;}
.fullwidthbanner-container:hover .tp-bullets.simplebullets.navbar{display:block;}
.beta-banner:hover .tp-bullets.simplebullets.navbar{display:block;}

.tp-leftarrow.navbar{background: url(../img/large_left.png) no-Repeat 0px 9px;
width: 40px;
height: 40px;}
.tp-rightarrow.navbar{background: url(../img/large_right.png) no-Repeat -1px 9px;
width: 40px;
height: 40px;
position:absolute; right:15px;top:0px;}
.tp-leftarrow.default{display:none;}
.tp-rightarrow.default{display:none;}
.fullwidthbanner-container:hover .tp-leftarrow.default{display:block;}
.fullwidthbanner-container:hover .tp-rightarrow.default{display:block;}
.beta-banner:hover .tp-leftarrow.default{display:block;top:40%!important; margin-top:0px!important;}
.beta-banner:hover .tp-rightarrow.default{display:block;}
.beta-map iframe{width:100%; height:550px;}
.beta-calendar{overflow:auto;}

.beta-paralex{background:url(../images/abs_img1.jpg) repeat-y center bottom; }
.beta-paralex2{background:url(../images/about1.jpg) repeat-y center bottom; }
.beta-paralex3{background:url(../images/abs_img3.jpg) repeat-y center top; }
.beta-paralex4{background:url(../images/abs_img2.jpg) repeat-y center bottom; }
.beta-paralex5{background:url(../images/abs_img4.jpg) repeat-y center bottom; }
.beta-paralex6{background:url(../images/abs_img5.jpg) repeat-y center bottom; }
.beta-paralex7{background:url(../images/abs_img6.jpg) repeat-y center bottom; }
.beta-paralex-back{background-attachment: fixed;background-size: cover;}

.beta-map iframe{border:none;}
.panel-group .panel+.panel{margin-top: 1px;}
.button-body{background-color:#58a7c6;}
.beta-bt2{border:1px solid white;}
.beta-bt2 i{color:white;}
.beta-subscribers input{width:43%;margin-right:0px;margin-bottom: 20px;}



.uc-body2{border: 1px solid #fff;padding: 80px 80px 90px;
background: rgba(255,255,255,0.7);text-align:center;}
.beta-coming{float:none; margin: 0 auto;}
.beta-subscribers button{height:35px;border:none;background:#3a5c83;color:#fff;width:110px}
.beta-subscribers button i{color:#fff;font-size:10px}
.beta-subscribers{margin-top:40px;}
.countdown-amount{font-family: "Dosis",sans-serif;}

.beta-pager-gallery.port-gallery a{width: 161px;
height: 110px;
margin: 3px 0px 0px 0px;
border:none;}

.elastic-construction2{float:none; margin: 0 auto; padding:100px 0px;}

.beta-rotator canvas{width:100%;}
.beta-rotator {font-family: "Dosis",sans-serif;}
.history-slider span {font-family: "Dosis",sans-serif;}