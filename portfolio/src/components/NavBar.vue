<script>
import NavBar from "../data/NavBarData.json";

export default {
  name: "Navbar",
  data() {
    return {
      NavBar,
      activeSection: null,
      isWideScreen: window.innerWidth > 768,
      menuActive: false,
    };
  },
  methods: {
    scrollToSection(id) {
      this.activeSection = !id;
      this.$scrollTo(id, 500);
      if (!this.isWideScreen) {
        this.toggleMenu();
      }
    },
    toggleMenu() {
      this.menuActive = !this.menuActive;
      console.log(this.menuActive);
    },
  },
};
</script>

<template>
  <div :class="{ 'menu-active': menuActive }">
    <nav>
      <button class="hamburger-btn" @click="toggleMenu" v-if="!isWideScreen">
        &#9776;
      </button>
      <ul :class="{ 'menu-active': menuActive }">
        <li v-for="item in NavBar" :key="item.id">
          <a
            :href="item.id"
            :class="{ active: activeSection === item.id }"
            @click.prevent="scrollToSection(item.id)"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.menu-active {
  display: flex;
}
.hamburger-btn {
  display: none;
  cursor: pointer;
  position: fixed;
  left: 0;
  top: 0;
}
/* Le bloc */
nav {
  background: #ffffff;
  box-shadow: 0 0.135vw 0.27vw rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Helvetica Neue", sans-serif;
}
*

/* La liste */
nav ul {
  list-style: none;
  display: flex;
  gap: 1.38vw;
  margin: 0;
  padding: 0;
}

/* L'item */
nav li a {
  display: inline-block;
  text-decoration: none;
  color: #333;
  padding: 0.69vw 1.04vw;
  border-radius: 0.345vw;
  transition: text-decoration-color 1s ease, text-decoration-thickness 1s ease;
}

nav li a:hover {
  text-decoration: underline;
  text-decoration-color: currentColor;
  text-decoration-thickness: 1px;
}

nav li a.active {
  background-color: #0056b3;
  color: #ffffff;
}

@media (max-width: 768px) {
  .hamburger-btn {
    display: block;
    outline: none;
  }
  .hamburger-btn:focus {
    outline: none;
  }
  .hamburger-btn:active {
    outline: none;
  }

  nav ul {
    display: none;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 0;
    top: 100%;
    width: 50%;
    text-align: left;
  }

  /* Lorsque le menu est actif */
  .menu-active nav ul {
    display: block;
  }

  nav ul li {
    border-bottom: 1px solid #eee;
  }

  nav ul li a {
    display: block;
    color: #333;
    text-decoration: none;
    padding-left: 0;
  }
}
</style>
