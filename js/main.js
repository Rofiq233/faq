


if (!customElements.get("faq-item")) {
  customElements.define(
    "faq-item",
    class FaqItem extends HTMLElement {
      constructor() {
        super();

        this.item = this.querySelector(".faq-item");
        this.toggle = this.querySelector(".faq-item-title");
        this.panel = this.querySelector(".faq-item-content");

        this.init();
      }

      init() {
        if (!this.toggle || !this.panel || !this.item) return;

        // default open support
        if (this.item.classList.contains("is-open")) {
          this.panel.style.height = this.panel.scrollHeight + "px";
        }

        this.toggle.addEventListener(
          "click",
          function () {
            this.item.classList.contains("is-open")
              ? this.close()
              : this.open();
          }.bind(this) // arrow fuction hole bind dite hoto na
        );
      }

      open() {
        this.item.classList.add("is-open");

        // start point
        this.panel.style.height = "0px";

        requestAnimationFrame(() => {
          // end point (animate)
          this.panel.style.height = this.panel.scrollHeight + "px";
        });
      }

      close() {
        // start point
        this.panel.style.height = this.panel.scrollHeight + "px";
        this.item.classList.remove("is-open");

        requestAnimationFrame(() => {
          // end point (animate)
          this.panel.style.height = "0px";
        });

        // cleanup after animation
        this.panel.addEventListener(
          "transitionend",
          () => {
            this.panel.removeAttribute("style");
          },
          { once: true }
        );
      }
    }
  );
}
