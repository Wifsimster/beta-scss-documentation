<template>
  <div id="sidebar" class="bg:grey-darkest">
    <div id="sidebar-content">
      <div class="overflow-y:auto">
        <ul class="list-reset text:white m:0">
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/flexbox"
          >Flexbox</router-link>
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/color"
          >Couleurs</router-link>
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/text"
          >Texte</router-link>
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/typography"
          >Typographie</router-link>
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/display"
          >Affichage</router-link>
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/position"
          >Positionnement</router-link>
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/float"
          >Float</router-link>
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/spacing"
          >Espacement</router-link>
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/border"
          >Bordure</router-link>
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/rounded"
          >Arrondi</router-link>
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/width"
          >Largeur</router-link>
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/height"
          >Hauteur</router-link>
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/effect"
          >Effets</router-link>
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/overflow"
          >Overflow</router-link>
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/zindex"
          >Z-index</router-link>
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/interactivity"
          >Interactivité</router-link>
          <router-link
            class="px:1 py:1/2 hover:bg:user cursor:pointer text:white"
            tag="li"
            active-class="bg:user"
            to="/animation"
          >Animation</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#sidebar {
  min-width: 88px;
  #sidebar-content {
    & > div {
      height: calc(100vh - 40px);
    }
  }
}
</style>