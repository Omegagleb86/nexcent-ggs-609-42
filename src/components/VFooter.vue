<script setup></script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__logo">
          <img src="@/assets/img/Logo-xl.svg" alt="">
        </div>
        <div class="footer__item">
          <h4>Company</h4>
          <ul class="footer__item-links">
            <li><a href="">About us</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Contact us</a></li>
          </ul>
        </div>
        <div class="footer__item">
          <h4>Support</h4>
          <ul class="footer__item-links">
            <li><a href="">Help center</a></li>
            <li><a href="">Terms of service</a></li>
            <li><a href="">Legal</a></li>
            <li><a href="">Privacy policy</a></li>
          </ul>
        </div>
        <div class="footer__item">
          <h4>Stay up to date</h4>
          <form action="" class="footer__form">
            <label for="">
              <input class="input footer__form-input" type="email" name="email" id="email"
                placeholder="Your email address">
            </label>
            <button type="submit" class="button_icon"><img src="@/assets/img/Send.svg" alt=""></button>
          </form>
          <ul class="footer__item-social">
            <li><a href=""><img src="@/assets/img/pinterest.svg" alt=""></a></li>
            <li><a href=""><img src="@/assets/img/dribbble.svg" alt=""></a></li>
            <li><a href=""><img src="@/assets/img/skype.svg" alt=""></a></li>
            <li><a href=""><img src="@/assets/img/youtube.svg" alt=""></a></li>
          </ul>
        </div>
      </div>
      <div class="footer__copyright">
        Copyright © 2020 Nexcent ltd. All rights reserved
      </div>
    </div>
  </footer>
</template>

<styles scoped></styles>
