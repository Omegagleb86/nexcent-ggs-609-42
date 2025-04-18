<script setup></script>

<template>
  <header>
        <nav class="desktop-navigation">
            <div class="container">
                <div class="desktop-navigation__wrap">
                    <img src="@/assets/img/Logo.svg" alt="Nexcent" class="desktop-navigation__logo" />
                    <ul class="navigation__list">
                        <li class="navigation__list-element_active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Service</a>
                        </li>
                        <li>
                            <a href="#">Feature</a>
                        </li>
                        <li>
                            <a href="#">Product</a>
                        </li>
                        <li>
                            <a href="#">Testimonial</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                    <div class="navigation__buttons">
                        <button class="button_light-sm">Login</button>
                        <button class="button_primary-sm">Sign up</button>
                    </div>
                </div>
            </div>
        </nav>
        <nav class="mobile-navigation">
            <div class="mobile-navigation__wrap">
                <div class="mobile-navigation__header">
                    <img src="@/assets/img/Logo-sm.svg" alt="Nexcent" class="desktop-navigation__logo" />
                    <button class="mobile-navigation__header-button">
                        <img src="@/assets/img/menu-open.svg" alt="" class="icon_menu-open">
                        <img src="@/assets/img/menu-close.svg" alt="" class="icon_menu-close">
                    </button>
                </div>
                <div class="mobile-navigation__content">
                    <ul class="navigation__list">
                        <li class="desktop-navigation__list-element_active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Service</a>
                        </li>
                        <li>
                            <a href="#">Feature</a>
                        </li>
                        <li>
                            <a href="#">Product</a>
                        </li>
                        <li>
                            <a href="#">Testimonial</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                    <div class="navigation__buttons">
                        <button class="button_light-sm">Login</button>
                        <button class="button_primary-sm">Sign up</button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped></style>
