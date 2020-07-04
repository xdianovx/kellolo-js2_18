<template>
  <div>
    <!-- <header>
        <div class="logo">GeekShop</div>
        <div class="basket">
            <form action="#" class="search-form">
                <input type="text" class="search-field">
                <button class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
            </form>
            <button class="btn-basket">Корзина</button>
            <basket ref="basket" />
            
        </div>
    </header>
    <main>
        <catalog @add="addItem"/>
    </main> -->
    <header>
        
            <div class="header center">
                <div class="header__left">
                    <a class="logo" href="index.html">
                        <img class="logo__img" src="https://raw.githubusercontent.com/Sergey-TR/testkraken/master/project/img/logo.png" alt="logo">BRAN<span class="logoD">D</span>
                    </a>
                        <div class="browse">
                        <details class="browse_det">
                            <summary class="browse_det_sum">Browse</summary>
                            <div class="browse_drop_menu">
                            <h3 class="browse__h3">Women</h3>
                            <ul class="browse_ul">
                                <li><a href="women.html" class="browse_a">Dresses</a></li>
                                <li><a href="women.html" class="browse_a">Tops</a></li>
                                <li><a href="women.html" class="browse_a">Sweaters/Knits</a></li>
                                <li><a href="women.html" class="browse_a">Jackets/Coats</a></li>
                                <li><a href="women.html" class="browse_a">Blazers</a></li>
                                <li><a href="women.html" class="browse_a">Denim</a></li>
                                <li><a href="women.html" class="browse_a">Leggings/Pants</a></li>
                                <li><a href="women.html" class="browse_a">Skirts/Shorts</a></li>
                                <li><a href="women.html" class="browse_a">Accessories</a></li>
                            </ul>
                            <h3 class="browse__h3">men</h3>
                            <ul class="browse_ul">
                                <li><a href="men.html" class="browse_a">Tees/Tank tops</a></li>
                                <li><a href="men.html" class="browse_a">Shirts/Polos</a></li>
                                <li><a href="men.html" class="browse_a">Sweaters</a></li>
                                <li><a href="men.html" class="browse_a">Sweatshirts/Hoodies</a></li>
                                <li><a href="men.html" class="browse_a">Blazers</a></li>
                                <li><a href="men.html" class="browse_a">Jackets/vests</a></li>
                            </ul>
                            </div>
                        </details>
                    </div>
                        <form class="header__form" action="#">
                        <input class="header__form__int" type="search" placeholder="Search for Item...">
                        <button class="header__form__btn" type="submit"><i class="fas fa-search"></i></button>
                    </form>
                </div>
                <div class="header__right">
                <div class="header__right_cart">
                    <div class="cart__total">
                        <span class="cart__total_span">0</span>
                        <button class="cart__total_btn"></button>
                    </div>
                    
                </div>
                    <!--<a href="cart.html"><img class="header__cart" src="img/cart.png" alt="cart"></a>-->
                    <div class="my_account_btn">
                        <details class="my_account_det">
                            <summary class="my_account_sum">My Account</summary>
                            <div class="my_account_checkout">
                                <!-- <div class="basket-item"> -->
                                    <basket ref="basket" />
                                <!-- </div> -->
                                
                                    <div class="my_account_total">
                                        <div class="total">TOTAL</div>
                                        <div class="total500"><span class="span_total">0</span></div>
                                    </div>
                                    <input class="my_account_check" type="submit" value="Checkout"><br>
                                    <input class="my_account_cart" type="submit" value="Go to cart">
    
                            </div>
                        </details>
                    </div>
                    <!--<a href="#" class="button">My Account</a>-->
                </div>
            </div>
        </header>
        <nav>
            <div class="nav">
                <ul class="menu center">
                    <li class="menu__list"><a href="#" class="menu__link">Home</a></li>
                    <li class="menu__list"><a href="men.html" class="menu__link">Man</a></li>
                    <li class="menu__list"><a href="women.html" class="menu__link">Women</a>
                        <div class="drop">
                            <div class="drop_women_left">
                                <h3 class="drop__h3">Women</h3>
                            <ul class="drop__ul">	
                                <li><a href="women.html" class="drop__a">Dresses</a></li>
                                <li><a href="women.html" class="drop__a">Tops </a></li>
                                <li><a href="women.html" class="drop__a">Sweaters/Knits</a></li>
                                <li><a href="women.html" class="drop__a">Jackets/Coats </a></li>
                                <li><a href="women.html" class="drop__a">Blazers </a></li>
                                <li><a href="women.html" class="drop__a">Denim </a></li>
                                <li><a href="women.html" class="drop__a">Leggings/Pants </a></li>
                                <li><a href="women.html" class="drop__a">Skirts/Shorts </a></li>
                                <li><a href="women.html" class="drop__a">Accessories</a></li>
                            </ul>
                            </div>
                            <div class="drop_women_center">
                                <div class="drop_center_top">
                                    <h3 class="drop__h3">Women</h3>
                            <ul class="drop__ul">	
                                <li><a href="women.html" class="drop__a">Dresses </a></li>
                                <li><a href="women.html" class="drop__a">Tops </a></li>
                                <li><a href="women.html" class="drop__a">Sweaters/Knits  </a></li>
                                <li><a href="women.html" class="drop__a">Jackets/Coats </a></li>
                                </ul>
                                </div>
                                <div class="drop_center_down">
                                    <h3 class="drop__h3">Women</h3>
                            <ul class="drop__ul">	
                                <li><a href="women.html" class="drop__a">Dresses </a></li>
                                <li><a href="women.html" class="drop__a">Tops </a></li>
                                <li><a href="women.html" class="drop__a">Sweaters/Knits  </a></li>
                            </ul>
                                </div>
                            </div>
                            <div class="drop_women_right">
                                <div class="drop_right_top">
                                    <h3 class="drop__h3">Women</h3>
                            <ul class="drop__ul">	
                                <li><a href="women.html" class="drop__a">Dresses </a></li>
                                <li><a href="women.html" class="drop__a">Tops </a></li>
                                <li><a href="women.html" class="drop__a">Sweaters/Knits  </a></li>
                                <li><a href="women.html" class="drop__a">Jackets/Coats </a></li>
                                </ul>
                                </div>
                                <div class="drop_right_img">
                                    <a href="men.html"><div class="drop_img">
                                        <h3 class="drop_img_h3">Super sale!</h3>
                                    </div></a>
                                    <!--<img src="img/drop_img.png" alt="">-->
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="menu__list"><a href="#" class="menu__link">Kids</a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Accoseriese</a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Featured</a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Hot Deals</a></li>
                </ul>
            </div>
        </nav>
        <main class="main center">
            <div class="catalog-items">
                <!--Catalog elems-->
                <catalog @add="addItem"/>
            </div>
        </main>
  </div>
</template>

<script>
import Catalog from '../components/Catalog.vue'
import Basket from '../components/Basket.vue'
// import catalogItem from '../components/Item'

export default {
    components: {
        //блок для регистрации дочерних компонентов
        // Catalog, Basket, catalogItem
        'catalog': Catalog,
        'basket': Basket
    },
    data() {
        //дата из объекта превратилась в функцию, возвращающую объект
        return {

        }
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
        
    }
}
</script>

<style>

</style>