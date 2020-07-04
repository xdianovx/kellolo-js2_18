<template>
  <div>
    <header class="header center">
      <div class="header__left">
        <a href class="logo">
          <img class="logo__img" src="img/18.png" alt="logo" />BRAN
          <span class="logo__span">D</span>
        </a>
        <form class="header__form" action="#">
          <details class="details_class">
            <summary>Browse</summary>
            <div class="drop">
              <div class="drop__flex">
                <h3 class="drop__h3">Women</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Jackets/Coats</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Blazers</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Denim</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Leggings/Pants</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Skirts/Shorts</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Accessories</a>
                  </li>
                </ul>
                <h3 class="drop__h3__man">Man</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Tees/Tank tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Shirts/Polos</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweatshirts/Hoodies</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Blazers</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Jackets/vests</a>
                  </li>
                </ul>
              </div>
            </div>
          </details>
          <input class="input__text" type="text" placeholder="Search for Item..." />
          <button class="button_search">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div class="header__right">
        <div class="header__drop">
          <a href="#">
            <img class="header__cart" src="img/cart.png" alt="cart" />
          </a>
          <div class="dropCart">
            <div class="dropCart__flex">
              <ul class="dropCart__ul">
                <li class="dropCart__li">
                  <div class="dropCart__div">
                    <img src="img/Layer_43c.png" alt="dress" class="dropCart__img" />
                    <div class="dropCart__div_in">
                      <h2 class="dropCart__h2">Rebox Zane</h2>
                      <p class="dropCart__p">
                        <i class="fas fa-star fas1"></i>
                        <i class="fas fa-star fas1"></i>
                        <i class="fas fa-star fas1"></i>
                        <i class="fas fa-star fas1"></i>
                        <i class="fas fa-star fas1"></i>
                      </p>
                      <p class="dropCart__p1">
                        1
                        <span class="dropCart__span">x</span> $250
                      </p>
                    </div>
                    <button>
                      <i class="fas fa-times-circle"></i>
                    </button>
                  </div>
                  <div class="dropCart__border"></div>
                </li>

                <li class="dropCart__li">
                  <div class="dropCart__div">
                    <img src="img/Layer_44c.png" alt="dress" class="dropCart__img" />
                    <div class="dropCart__div_in">
                      <h2 class="dropCart__h2">Rebox Zane</h2>
                      <p class="dropCart__p">
                        <i class="fas fa-star fas1"></i>
                        <i class="fas fa-star fas1"></i>
                        <i class="fas fa-star fas1"></i>
                        <i class="fas fa-star fas1"></i>
                        <i class="fas fa-star fas1"></i>
                      </p>
                      <p class="dropCart__p1">
                        1
                        <span class="dropCart__span">x</span> $250
                      </p>
                    </div>

                    <button>
                      <i class="fas fa-times-circle"></i>
                    </button>
                  </div>
                  <div class="dropCart__border"></div>
                </li>
              </ul>
            </div>
            <div class="dropCart__total">
              <p class="dropCart__total_p">TOTAL</p>
              <p class="dropCart__total_p">$500.00</p>
            </div>
            <input type="submit" value="Checkout" class="dropCart__input" />
            <input type="submit" value="Go to cart" class="dropCart__input1" />
          </div>
        </div>
        <a href class="button">
          <div class="button_div">
            My Account
            <i class="fas fa-caret-down fas__down"></i>
          </div>
        </a>
      </div>

      <div class="basket">
        <form action="#" class="search-form">
          <input type="text" class="search-field" />
          <button class="btn-search">
            <i class="fas fa-search"></i>
          </button>
        </form>
        <button class="btn-basket">Корзина</button>
        <basket ref="basket" />
      </div>


    </header>
    <main>
      <nav class="nav center">
        <ul class="menu">
          <li class="menu__list">
            <a class="menu__link" href="#">Home</a>
          </li>
          <li class="menu__list">
            <a class="menu__link" href="#">Man</a>
            <div class="drop__menu">
              <div class="drop__flex">
                <h3 class="drop__h3">Man</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Jackets/Coats</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Blazers</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Denim</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Leggings/Pants</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Skirts/Shorts</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Accessories</a>
                  </li>
                </ul>
              </div>
              <div class="drop__flex">
                <h3 class="drop__h3">Man</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                </ul>
                <h3 class="drop__h3">Man</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="menu__list">
            <a class="menu__link" href="#">Women</a>
            <div class="drop__menu">
              <div class="drop__flex">
                <h3 class="drop__h3">Women</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Jackets/Coats</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Blazers</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Denim</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Leggings/Pants</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Skirts/Shorts</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Accessories</a>
                  </li>
                </ul>
              </div>
              <div class="drop__flex">
                <h3 class="drop__h3">Women</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                </ul>
                <h3 class="drop__h3">Women</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="menu__list">
            <a class="menu__link" href="#">Kids</a>
            <div class="drop__menu">
              <div class="drop__flex">
                <h3 class="drop__h3">Kids</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Jackets/Coats</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Blazers</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Denim</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Leggings/Pants</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Skirts/Shorts</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Accessories</a>
                  </li>
                </ul>
              </div>
              <div class="drop__flex">
                <h3 class="drop__h3">Kids</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                </ul>
                <h3 class="drop__h3">Kids</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="menu__list">
            <a class="menu__link" href="#">Accessories</a>
            <div class="drop__menu">
              <div class="drop__flex">
                <h3 class="drop__h3">Accessories</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Jackets/Coats</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Blazers</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Denim</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Leggings/Pants</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Skirts/Shorts</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Accessories</a>
                  </li>
                </ul>
              </div>
              <div class="drop__flex">
                <h3 class="drop__h3">Accessories</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                </ul>
                <h3 class="drop__h3">Accessories</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="menu__list">
            <a class="menu__link" href="#">Featured</a>
            <div class="drop__menu">
              <div class="drop__flex">
                <h3 class="drop__h3">Featured</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Jackets/Coats</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Blazers</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Denim</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Leggings/Pants</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Skirts/Shorts</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Accessories</a>
                  </li>
                </ul>
              </div>
              <div class="drop__flex">
                <h3 class="drop__h3">Featured</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                </ul>
                <h3 class="drop__h3">Featured</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="menu__list">
            <a class="menu__link" href="#">Hot Deals</a>
            <div class="drop__menu drop_last">
              <div class="drop__flex">
                <h3 class="drop__h3">Women</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Jackets/Coats</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Blazers</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Denim</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Leggings/Pants</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Skirts/Shorts</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Accessories</a>
                  </li>
                </ul>
              </div>
              <div class="drop__flex">
                <h3 class="drop__h3">Man</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                </ul>
                <h3 class="drop__h3">Kids</h3>
                <ul class="drop__ul">
                  <li>
                    <a href="#" class="drop__link">Dresses</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Tops</a>
                  </li>
                  <li>
                    <a href="#" class="drop__link">Sweaters/Knits</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <section class="promo center" style="background-image: url(img/promo-back.png);">
        <div class="promo__content">
          <h1 class="promo__h1">THE BRAND</h1>
          <h2 class="promo__h2">OF LUXERIOUS FASHION</h2>
        </div>
      </section>

      <aside class="sale center">
        <div class="sale__box">
          <div class="sale__big" style="background-image: url(img/1130.png);">
            <div class="hotDealMan">
              <p class="hotDealMan__p">
                hot deal
                <span class="hotDealMan__span">FOR MAN</span>
              </p>
            </div>
          </div>
          <div class="sale__mini" style="background-image: url(img/Layer_37.png);">
            <div class="luxirous">
              <p class="luxirous__p">
                LUXIROUS & trendy
                <span class="luxirous__span">ACCESORIES</span>
              </p>
            </div>
          </div>
        </div>
        <div class="sale__box">
          <div class="sale__mini" style="background-image: url(img/Layer_32.png);">
            <div class="woman">
              <p class="woman__p">
                30% offer
                <span class="woman__span">women</span>
              </p>
            </div>
          </div>
          <div class="sale__big" style="background-image: url(img/Layer_31.png);">
            <div class="kids">
              <p class="kids__p">
                new arrivals
                <span class="kids__span">FOR kids</span>
              </p>
            </div>
          </div>
        </div>
      </aside>

      <section class="product-box center">
        <div class="featured center">
          <h2 class="featured__h1">Featured Items</h2>
          <h3 class="featured__h3">Shop for items based on what we featured in this week</h3>     
        </div>
        <div class="product__container">
        <catalog @add="addItem" />
        </div>
        

        <div class="product__button">
          <input type="submit" value="Browse All Product" class="button_1" />
        </div>
      </section>

      <article class="feature center">
        <div class="featureBanner">
          <h2 class="featureBanner_h">
            30%
            <span class="featureBanner_span">OFFER</span>
          </h2>
          <h2 class="featureBanner_h2">FOR WOMEN</h2>
        </div>

        <div class="featureSales" style="background-image: url(img/Layer_38.png)">
          <div class="featureSales__box" style="background-image: url(img/Forma_1.svg);">
            <h2 class="featureSales__box_h2">Free Delivery</h2>
            <p class="featureSales__box_p">
              Worldwide delivery on all. Authorit tively morph next-generation innov
              tion with extensive
              models.
            </p>
          </div>
          <div class="featureSales__box" style="background-image: url(img/Forma_2.svg);">
            <h2 class="featureSales__box_h2">Sales & discounts</h2>
            <p class="featureSales__box_p">
              Worldwide delivery on all. Authorit tively morph next-generation innov
              tion
              with extensive models.
            </p>
          </div>
          <div class="featureSales__box" style="background-image: url(img/Forma_3.svg);">
            <h2 class="featureSales__box_h2">Quality assurance</h2>
            <p class="featureSales__box_p">
              Worldwide delivery on all. Authorit tively morph next-generation innov
              tion
              with extensive models.
            </p>
          </div>
        </div>
      </article>

      <section
        class="subscribe_block center"
        style="background: url(img/Layer_41.png) no-repeat center"
      >
        <div class="binBurhan" style="background-image: url(img/Layer_40.png)">
          <p class="binBurhan_p">
            &laquo;Vestibulum quis porttitor dui! Quisque viverra nunc&nbsp;mi,
            a&nbsp;pulvinar purus condimentum&nbsp;a. Aliquam condimentum mattis neque sed pretium&raquo;
          </p>
          <p class="binBurhan_p1">Bin Burhan</p>
          <p class="binBurhan_p2">Dhaka, Bd</p>
        </div>

        <div class="subscribe">
          <h3 class="subscribe__h3">Subscribe</h3>
          <h4 class="subscribe__h4">FOR OUR NEWLETTER AND PROMOTION</h4>
          <input class="subscribe__input" type="text" placeholder="Enter Your Email" />
          <button class="subscribe__button">
            <span class="subscribe__span">Subscribe</span>
          </button>
        </div>
      </section>

      <footer class="footer center">
        <div class="footer_div1">
          <a href class="logo">
            <img class="logo__img" src="img/18.png" alt="logo" />BRAN
            <span class="logo__span">D</span>
          </a>
          <p class="footer_p">
            Objectively transition extensive data rather than cross functional solutions.
            Monotonectally syndicate multidisciplinary materials before go&nbsp;forward benefits. Intrinsicly
            syndicate
            an&nbsp;expanded array of&nbsp;processes and cross-unit partnerships.
          </p>

          <p class="footer_p">
            Efficiently plagiarize 24/365 action items and focused infomediaries.
            Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
          </p>
        </div>
        <div class="footer_div2">
          <h3 class="footer_h3">COMPANY</h3>
          <a href="#" class="footer_a">Home</a>
          <br />
          <a href="#" class="footer_a">Shop</a>
          <br />
          <a href="#" class="footer_a">About</a>
          <br />
          <a href="#" class="footer_a">How It Works</a>
          <br />
          <a href="#" class="footer_a">Contact</a>
          <br />
        </div>
        <div class="footer_div2">
          <h3 class="footer_h3">INFORMATION</h3>
          <a href="#" class="footer_a">Tearms & Condition</a>
          <br />
          <a href="#" class="footer_a">Privacy Policy</a>
          <br />
          <a href="#" class="footer_a">How to Buy</a>
          <br />
          <a href="#" class="footer_a">How to Sell</a>
          <br />
          <a href="#" class="footer_a">Promotion</a>
          <br />
        </div>
        <div class="footer_div2">
          <h3 class="footer_h3">SHOP CATEGORY</h3>
          <a href="#" class="footer_a">Men</a>
          <br />
          <a href="#" class="footer_a">Women</a>
          <br />
          <a href="#" class="footer_a">Child</a>
          <br />
          <a href="#" class="footer_a">Apparel</a>
          <br />
          <a href="#" class="footer_a">Brows All</a>
          <br />
        </div>
      </footer>

      <footer class="footer2 center">
        <div class="footer2__copirait">
          <p>&copy; 2020 Brand All Rights Reserved.</p>
        </div>
        <div class="footer2__divLink">
          <a href class="footer2_a">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href class="footer2_a">
            <i class="fab fa-twitter"></i>
          </a>
          <a href class="footer2_a">
            <i class="fab fa-instagram"></i>
          </a>
          <a href class="footer2_a">
            <i class="fab fa-vk"></i>
          </a>
          <a href class="footer2_a">
            <i class="fab fa-google-plus-g"></i>
          </a>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
import Catalog from "../components/Catalog.vue";
import Basket from "../components/Basket.vue";
// import catalogItem from '../components/Item'

export default {
  components: {
    //блок для регистрации дочерних компонентов
    // Catalog, Basket, catalogItem
    catalog: Catalog,
    basket: Basket
  },
  data() {
    //дата из объекта превратилась в функцию, возвращающую объект
    return {};
  },
  props: {
    //пробрасываемые извне данные, которые не изменяются внутри компонента
  },
  methods: {
    addItem(item) {
      this.$refs.basket.add(item);
    },
    get(url) {
      return fetch(url).then(data => data.json());
    }
  },
  mounted() {
    // this.$children[0] // >>> [{1}, {2}] >>> [{3}, {1}, {2}]
    // this.$refs.kolya //>>> comp Basket { kolya: {/Basket.vue/} }
  }
};
</script>

<style>
</style>