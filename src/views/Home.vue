<template>
  <div class="home">
    <!-- Hero Start -->
    <section id="home" class="pt-8">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full self-end px-4 md:w-1/2 lg:w-1/2">
            <div class="relative lg:mt-9 lg:right-0">
              <div class="lg:right-0">
                <img src="@/assets/img/jumbo.png" class="w-64 mx-auto" />
              </div>
            </div>
          </div>
          <div class="w-full self-center px-4 md:w-1/2 lg:w-1/2">
            <h3
              class="
                mt-4
                lg:mt-36
                md:mt-24
                font-semibold
                text-sm
                lg:text-sm
                text-primary
              "
            >
              Hi Everyone 👋, My Name Is
            </h3>
            <h1 class="text-dark text-3xl font-semibold mt-1">
              Sandi Fauzan Rabani
            </h1>
            <h2 class="mt-2 text-sm text-gray-400">
              Front-end Web Developer & Web Designer
            </h2>
            <router-link to="/Contact">
              <button
                class="
                  mt-9
                  rounded-full
                  text-sm
                  py-3
                  px-16
                  bg-primary
                  text-white
                  font-semibold
                  hover:text-primary hover:bg-purple-100
                  transition
                  duration-100
                "
              >
                Contact Me
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <!-- Hero End -->

    <!-- About Start -->
    <section id="about" class="py-32">
      <div class="container lg:px-32">
        <div class="flex flex-wrap">
          <div class="w-full px-4 text-center mt-28 mb-10">
            <h3 class="text-sm text-primary font-semibold mb-2">About</h3>
            <h4 class="font-bold uppercase text-dark text-xl lg:text-2xl mb-3">
              My, Myself & I
            </h4>
            <p
              class="
                text-secondary
                md:text-base
                text-sm
                px-10
                lg:px-44
                tracking-wider
                lg:leading-10
                leading-8
                text-left
              "
            >
              I am a Front-End Developer located in Majalengka, Indonesia. Talks
              about Vue, Tailwind, CSS and related topics, Also i have interest
              in User Interface/User Experience Design.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- About End -->
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    document.title = "Home";
  },
};
</script>
