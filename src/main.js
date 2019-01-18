import Vue from 'vue'
import DropDown from './components/Dropdown.vue'

Vue.config.productionTip = false

new Vue({
    render: function (createElement) {
        return createElement(DropDown, {
            props: {
                name: 'select-name',
                options: [
                    {
                        name: 'Videos',
                        value: 'videos',
                        iconSvgPath: 'M16 7l4-4v14l-4-4v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v3zm-8 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z',
                        iconViewbox: '0 0 20 20'
                    },
                    {
                        name: 'Channels',
                        value: 'channels',
                        iconSvgPath: 'M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z',
                        iconViewbox: '0 0 20 20'
                    },
                    {
                        name: 'Category',
                        value: 'category',
                        iconSvgPath: 'M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z',
                        iconViewbox: '0 0 20 20'
                    },
                    {
                        name: 'Stars',
                        value: 'stars',
                        iconSvgPath: 'M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z',
                        iconViewbox: '0 0 20 20'
                    },
                ]
            }
        });
    },
}).$mount('#app')
