<template>
  <v-app id="inspire">
    <!--<v-navigation-drawer
      v-model="drawer"
      app
      clipped >
        <v-list dense>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-settings</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Settings</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>-->

	<v-app-bar
        app
        clipped-left >

        <!--<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
        <v-row class="ml-5">
            <v-icon class="blue--text">mdi-book</v-icon>
            <v-toolbar-title class="ml-3">GDZ</v-toolbar-title>
            <v-toolbar-title class="ml-2 font-weight-bold">Fast</v-toolbar-title>
        </v-row>
        
    </v-app-bar>

    <v-content>
            
            <h1>Быстрый поиск гдз</h1>
            <v-divider class="my-5"></v-divider>

            <v-row v-if="selectedSubject">
                <v-col cols="2">
                    <v-img :src="imgs[ind]">></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="3">Предмет</v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-select
                        :items="subjects"
                        label=""
                        v-model="selectedSubject"
                        outlined
                    >
                    </v-select>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="2">Номер</v-col>
            </v-row>    
            <v-row>
                <v-col cols="2">
                    <v-text-field
                        v-model="selectedNumber"
                        outlined
                    >
                    </v-text-field>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="1">
                    <v-btn class="mt-2" @click="go">
                        Найти
                    </v-btn>
                </v-col>
            </v-row>
            

    </v-content>

    <v-footer app>
        <span>vk</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
        drawer: false,
        subjects: [],
        links: [],
        imgs: [],
        selectedSubject: '',
        selectedNumber: '',
        ind: '',
    }),
    created () {
        this.$vuetify.theme.dark = true
    },
    mounted() {
        this.subjects = this.$store.getters.getSubjects;
        this.links = this.$store.getters.getLinks;
        this.imgs = this.$store.getters.getImages;
    },
    methods: {
        go() {
            this.selectedNumber = parseInt(this.selectedNumber);
            if (!Number.isInteger(this.selectedNumber)) {
                alert("Нужно ввести номер");
                this.selectedNumber = '';
            } else if (this.selectedSubject == '' || this.selectedNumber == '')
                alert("Вы должны выбрать учебник и ввести номер");
            else
                location.href = this.links[this.ind] + this.selectedNumber + "-nom";
        }
    },
    watch: {
        selectedSubject() {
            this.ind = this.subjects.indexOf(this.selectedSubject);
        }
    },
  }
</script>