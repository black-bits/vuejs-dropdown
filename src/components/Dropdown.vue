<template>
    <div>
        <popper
                v-on:show="popperShow"
                v-on:hide="popperHide"
                v-on:created="popperCreated"
                trigger="click"
                :options="popperOptions"
        >
            <div :class="popperClass" >
                <div v-if="hasDescription" :class="descriptionClass">
                    {{ description }}
                </div>
                <div v-for="(option, index) in options" :key="index" @click="setOption(index)" :class="[optionClass(index), option.value === currentOption.value ? optionActiveClass(index): '']">
                    <svg v-if="optionHasSvgIcon(index) && (optionValueType === 'icon' ||  optionValueType === 'iconName')"
                         :class="optionIconClass(index)"
                         xmlns="http://www.w3.org/2000/svg"
                         :viewBox="option.iconViewbox"
                    >
                        <path :d="option.iconSvgPath"/>
                    </svg>
                    <div v-if="optionValueType != 'icon'"
                         :class="optionValueClass(index)"

                    >
                        {{ option.name }}
                    </div>
                    <svg v-if="optionHasSvgIcon(index) && optionValueType === 'nameIcon'"
                         :class="optionIconClass(index)"
                         xmlns="http://www.w3.org/2000/svg"
                         :viewBox="option.iconViewbox"
                    >
                        <path :d="option.iconSvgPath"/>
                    </svg>
                    <div style="clear: both"></div>
                </div>
            </div>

            <button type="button" slot="reference" :class="currentOptionClass">
                <svg v-if="currentOptionHasSvgIcon() && (currentOptionValueType === 'icon' ||  currentOptionValueType === 'iconName')"
                     :class="currentOptionIconClass" xmlns="http://www.w3.org/2000/svg"
                     :viewBox="currentOption.iconViewbox">
                    <path :d="currentOption.iconSvgPath"/>
                </svg>
                <span v-if="currentOptionValueType !== 'icon'"
                      :class="currentOptionValueClass"
                >
                    {{ currentOption.name }}
                </span>
                <svg v-if="currentOptionHasSvgIcon() && currentOptionValueType === 'nameIcon'"
                     :class="currentOptionIconClass" xmlns="http://www.w3.org/2000/svg"
                     :viewBox="currentOption.iconViewbox">
                    <path :d="currentOption.iconSvgPath"/>
                </svg>


                <svg v-show="arrow" :class="[arrowClass, open ? arrowActiveClass : '']"
                     xmlns="http://www.w3.org/2000/svg" :viewBox="arrowIconViewbox">
                    <path :d="arrowIconPath"/>
                </svg>
            </button>
        </popper>

        <input :name="name" :value="currentOption.value" style="display: none"/>
    </div>
</template>

<script>
    import Popper from 'vue-popperjs';

    export default {
        name: 'Dropdown',
        props: {
            name: String,
            options: Array,
            arrow: {
                type: Boolean,
                default: true
            },
            arrowIconPath: {
                type: String,
                default: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            },
            arrowIconViewbox: {
                type: String,
                default: "0 0 20 20"
            },
            arrowClass: {
                type: String,
                default: "dd_icon dd_float_left"
            },
            arrowActiveClass: {
                type: String,
                default: "dd_transform-180"
            },
            currentOptionValueType: {
                default: 'iconName',
                validator: function (value) {
                    // The value must match one of four strings
                    return ['name', 'icon', 'iconName', 'nameIcon'].indexOf(value) !== -1
                }
            },
            optionValueType: {
                default: 'iconName',
                validator: function (value) {
                    // The value must match one of four strings
                    return ['name', 'icon', 'iconName', 'nameIcon'].indexOf(value) !== -1
                }
            },
            popperOptions: Object,
            currentOptionIconClass: {
                type: String,
                default: "dd_icon dd_float_left"
            },
            currentOptionValueClass: {
                type: String,
                default: "dd_float_left"
            },
            currentOptionClass: {
                type: String,
                default: "dd_boarder_none"
            },
            optionButtonClass: {
                type: String,
                default: ""
            },
            popperClass: {
                type: String,
                default: "popper"
            },
            description: {
                type: String,
                default: ""
            },
            descriptionClass: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                open: false,
                currentOption: this.options[0],
                currentPopperContext: null
            }
        },
        computed: {
            hasDescription: function () {
                if(this.description === ""){
                    return false
                }
                return true;
            }
        },
        methods: {
            optionClass: function (index) {
                if (this.options[index].hasOwnProperty('optionClass')) {
                    return this.options[index].optionClass;
                }
                return '';
            },
            optionActiveClass: function (index) {
                if (this.options[index].hasOwnProperty('optionActiveClass')) {
                    return this.options[index].optionActiveClass;
                }
                return '';
            },
            optionIconClass: function (index) {
                if (this.options[index].hasOwnProperty('optionIconClass')) {
                    return this.options[index].optionIconClass;
                }
                return 'dd_icon dd_float_left';
            },
            optionValueClass: function (index) {
                if (this.options[index].hasOwnProperty('optionValueClass')) {
                    return this.options[index].optionValueClass;
                }
                return 'dd_float_left';
            },
            setOption(index) {
                this.currentOption = this.options[index];
                this.currentPopperContext.doClose();
            },
            popperShow() {
                this.open = true;
            },
            popperHide() {
                this.open = false;
            },
            popperCreated(context) {
                this.currentPopperContext = context;
            },
            optionHasSvgIcon(index) {
                if (this.options[index].hasOwnProperty('iconSvgPath')) {
                    return true;
                }
                return false;
            },
            currentOptionHasSvgIcon() {
                if (this.currentOption.hasOwnProperty('iconSvgPath')) {
                    return true;
                }
                return false;
            }
        },
        components: {
            'popper': Popper
        },
    }
</script>

<style scoped>
    .dd_float_left {
        float: left;
    }
    .dd_icon {
        height: 19px;
        left: 19px;
    }
    .dd_transform-180 {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }
    .dd_boarder_none {
        border: none;
    }
</style>
