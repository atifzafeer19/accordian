window.onload = function () {
  /* Defining Variable - Start */
  let faq = [...document.querySelectorAll(".faq-title")];
  let faq_items = [...document.querySelectorAll(".faq-items")];
  let faq_content = document.querySelectorAll(".faq-items .faq-content");
  let faq_len = faq.length;
  /* Defining Variable - End */
  faq.forEach(el => el.addEventListener('click', function (e) {
    let index = returnindex(this.parentElement);
    this.nextElementSibling.classList.toggle("faq-cont-show");
    if (this.nextElementSibling.style.maxHeight) {
      this.nextElementSibling.style.maxHeight = null;
    } else {
      this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 40 + "px";
    }
      getprevioussiblings(this.nextElementSibling, index);
  }));

  /*  ALL  FUNCTIONS  */
  function returnindex(params) {
    for (let i = 0; i < faq_items.length; i++) {
      if (faq_items[i] == params) return i;
    }
  }
  function  getprevioussiblings(params, index){
    for (let j = index - 1; j >= 0; j--) {
      let items = faq_items[j].children[1].classList.contains("faq-cont-show");
      if(items == true){
         let all_prev_hgt = (index - j - 1) > 1 ?  (index - j - 1)*48 : 0;
        let prevhghtt = faq_items[j].getBoundingClientRect().top;
        if(prevhghtt < 0){
          window.scrollBy(0, Math.floor(prevhghtt + all_prev_hgt));
        }
      }
    }
    rmv_siblings_cls(params);
  }
  function rmv_siblings_cls(params) {
    faq_content.forEach(function (at_cont) {
      if (at_cont != params) {
        at_cont.classList.remove("faq-cont-show");
        at_cont.style.maxHeight = null;
      }
    });
  }
  
}  