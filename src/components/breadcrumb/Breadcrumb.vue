<template>
    <div>
        <ul class="c-breadcrumb">
            <slot/>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'c-breadcrumb'
}
</script>

<style lang="scss" scoped>
    @import '../../scss/common';

    .c-breadcrumb {
        display: flex;
        list-style: none;
        gap: 10px;
        margin: 0;
        padding: 0;

        font-size: 20px;
        color: $c-primary-color;

        li::before {
            content: '/';
        }

        :first-of-type::before {
            content: '';
        }

        li {
            display: flex;
            gap: 10px;

            &:hover {
                color: black;

                &:before {
                    color: $c-primary-color;
                }
            }
        }

        :first-of-type {
            gap: 0px;
        }
        
        a, link {
            color: inherit;
            text-decoration: none;
        }

        .is-active {
            color: black;

            &:before {
                color: $c-primary-color;
            }
        }
    }
</style>