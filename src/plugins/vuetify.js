import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1976d2',
                secondary: '#fff'
            },
            dark: {
                primary: '#6855ff',
                secondary: '#E91E63'
            },
        },
    },
});
