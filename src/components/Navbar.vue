<template>
  <!-- Header Start -->
  <header
    class="
      bg-transparent
      lg:px-64
      absolute
      top-0
      left-0
      w-full
      flex
      items-center
      z-10
    "
  >
    <div class="container">
      <div class="flex items-center justify-between relative">
        <div class="px-4 py-4">
          <router-link to="/" class="font-bold text-primary text-lg block"
            >SAN</router-link
          >
        </div>
        <div class="flex items-center px-4">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            class="block absolute right-4 lg:hidden md:hidden"
          >
            <span
              class="
                hamburger-line
                transition
                duration-300
                ease-in-out
                origin-top-left
              "
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out"
            ></span>
            <span
              class="
                hamburger-line
                transition
                duration-300
                ease-in-out
                origin-bottom-left
              "
            ></span>
          </button>
          <nav
            id="nav-menu"
            class="
              hidden
              absolute
              py-5
              lg:py-3
              bg-white
              shadow-lg
              rounded-lg
              w-48
              lg:w-full
              right-4
              top-full
              lg:block
              lg:static
              lg:bg-transparent
              lg:max-w-full
              lg:shadow-none
              lg:rounded-none
              md:block
              md:static
              md:bg-transparent
              md:max-w-full
              md:shadow-none
              md:rounded-none
            "
          >
            <ul class="block lg:flex md:flex">
              <li class="group">
                <router-link
                  to="/"
                  class="
                    lg:text-sm
                    text-base
                    flex
                    text-dark
                    hover:text-primary
                    py-3
                    mx-8
                  "
                  >Home</router-link
                >
              </li>
              <li class="group">
                <router-link
                  to="/Skills"
                  class="
                    lg:text-sm
                    text-base
                    flex
                    text-dark
                    hover:text-primary
                    py-3
                    mx-8
                  "
                  >Skills</router-link
                >
              </li>
              <li class="group">
                <router-link
                  to="/Projects"
                  class="
                    lg:text-sm
                    text-base
                    flex
                    text-dark
                    hover:text-primary
                    py-3
                    mx-8
                  "
                  >Projects</router-link
                >
              </li>
              <li class="group">
                <router-link
                  to="/Contact"
                  class="
                    lg:text-sm
                    text-base
                    flex
                    text-dark
                    hover:text-primary
                    py-3
                    mx-8
                  "
                  >Contact</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    });

    window.onscroll = function () {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };
  },
};
</script>

<style scoped>
.navbar-fixed {
  position: fixed;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.127);
  backdrop-filter: blur(5px);
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
}

/* Hamburger */
.hamburger-line {
  @apply w-7 h-0.5 my-2 block bg-dark rounded-full;
}

.hamburger-active > span:nth-child(1) {
  transform: rotate(45deg);
  /* @apply rotate-45; */
}

.hamburger-active > span:nth-child(2) {
  transform: scale(0);
  /* @apply scale-0; */
}

.hamburger-active > span:nth-child(3) {
  transform: rotate(-45deg);
  /* @apply -rotate-45; */
}
</style>