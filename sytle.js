const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const apps  = (() => {

    
    

    // biến Xóa sản phẩm đã mua
    const cartRemove = $$('.header__cart-item-remove')
    
    // const app = [];
    const app = [
        {
            imageUrl: "https://cf.shopee.vn/file/5940d4bb1598e8a1889854d3fc078a7c_tn",
            nameProduct: "Chuột máy tính có dây Fuhlen L102",
            priceOld: "40.000đ",
            priceNew: "35.000đ",
            nameBand: "Whoo",
            nameBandOrigin: "Hà Nội",
            favourite: "Yêu thích",
            saleOff: "50%",
        },
        {
            imageUrl: "https://cf.shopee.vn/file/17df5ad9f2c2c6da867792dcd16e0235_tn",
            nameProduct: "Ốp Điện Thoại Trong Suốt Có Ngăn Đựng Thẻ Cho Iphone 12 Pro MAX 8 Plus X XR XS 11 Pro MAX se2020",
            priceOld: "40.000đ",
            priceNew: "35.000đ",
            nameBand: "Hà Nội",
            nameBandOrigin: "Whoo",
            favourite: "Yêu thích",
            saleOff: "50%",
        },
        {
            imageUrl: "https://cf.shopee.vn/file/3e6478bd733d5e9a35321a330a12b5c3_tn",
            nameProduct: "Ốp lưng iphone Water Color cạnh vuông BVC 6/6plus/6s/6splus/7/7plus/8/8plus/x/xr/xs/11/12/pro/max/plus/promax-Awifi A1-9",
            priceOld: "40.000đ",
            priceNew: "35.000đ",
            nameBand: "Hà Nội",
            nameBandOrigin: "Whoo",
            favourite: "Yêu thích",
            saleOff: "50%",
        },
        {
            imageUrl: "https://cf.shopee.vn/file/17df5ad9f2c2c6da867792dcd16e0235_tn",
            nameProduct: "Ốp Điện Thoại Trong Suốt Có Ngăn Đựng Thẻ Cho Iphone 12 Pro MAX 8 Plus X XR XS 11 Pro MAX se2020",
            priceOld: "40.000đ",
            priceNew: "35.000đ",
            nameBand: "Hà Nội",
            nameBandOrigin: "Whoo",
            favourite: "Yêu thích",
            saleOff: "50%",
        },
        {
            imageUrl: "https://cf.shopee.vn/file/5940d4bb1598e8a1889854d3fc078a7c_tn",
            nameProduct: "Chuột máy tính có dây Fuhlen L102",
            priceOld: "40.000đ",
            priceNew: "35.000đ",
            nameBand: "Hà Nội",
            nameBandOrigin: "Whoo",
            favourite: "Yêu thích",
            saleOff: "50%",
        },
    ];
    return {
        add(product) {
            app.push(product);
        },
        delete(item) {
            app.splice(item, 1)
        },

        render() {
            const productContainer = $('.home-product-container')
            const html = app.map((appProduct, index) => {
                return `<div class="col l-2-4 m-4 c-6 marginTOp">
                            <a class="home-product-item" href="" data-index="${index}">
                                <div class="home-product-item-img" style="background-image: url('${appProduct.imageUrl}');">

                                </div>
                                <h4 class="home-product-item-name">${appProduct.nameProduct}</h4>  
                                <div class="home-product-item__price">
                                    <span class="home-product-item__price-old">${appProduct.priceOld}</span>
                                    <span class="home-product-item__price-new">${appProduct.priceNew}</span>
                                </div>

                                <div class="home-product-item__action">
                                    <span class="home-product-item__like">
                                        
                                        <i class="product-like fas fa-heart"></i>
                                        <i class="product-no-like far fa-heart"></i>
                                    </span>
                                    <div class="home-product-item__rating">
                                        <i class="home-product-item__rating-icon fas fa-star"></i>
                                        <i class="home-product-item__rating-icon fas fa-star"></i>
                                        <i class="home-product-item__rating-icon fas fa-star"></i>
                                        <i class="home-product-item__rating-icon fas fa-star"></i>
                                        <i class="home-product-item__rating-icon fas fa-star"></i>
                                    </div>
                                    <span class="home-product-item__sold">88 Đã bán</span>
                                </div>
                                <div class="home-product-item__origin">
                                    <span class="home-product-item__brand">${appProduct.nameBand}</span>
                                    <span class="home-product-item__origin-name">${appProduct.nameBandOrigin}</span>
                                </div>
                                
                                <div class="home-product-item__favourite">
                                    <i class="fas fa-check"></i>
                                    <span>${appProduct.favourite}</span>
                                </div>

                                <div class="home-product-item__sale-off">
                                    <span class="home-product-item__sale-off-percent">${appProduct.saleOff}</span>
                                    <span class="home-product-item__sale-off-labeln">GIẢM</span>
                                </div>
                            </a>
                        </div>`
            }).join("")
            productContainer.innerHTML = html

            this.rateProduct();
            this.byProduct()
        },
        //login()
        login() {
            $('.modal').style.display = 'block';
            $('.auth-form__header .auth-form__heading').innerText = "Đăng nhập";
            $('.auth-form_form .auth-form__group:nth-child(3)').style.display = 'none';
            $('.auth-form-aside').innerHTML = 
                `<p class="auth-form__policy-text-login">Quên mật khẩu</p>
                    <p class="auth-form__policy-text-login">Cần trợ giúp</p>`;
            $('.auth-form__controls .btn--primary').innerText = "Đăng nhập"
            $('.auth-form__footer .auth-form__footer-text').innerText = "Bạn mới đến Shoppe?"
            $('.auth-form__footer .auth-form__swith-btn').innerText = "Đăng ký"
        },

        //registration()
        registration() {
            $('.modal').style.display = 'block'
            $('.auth-form__header .auth-form__heading').innerText = "Đăng ký";
            $('.auth-form_form .auth-form__group:nth-child(3)').style.display = 'block';
            $('.auth-form-aside').innerHTML = 
                `<p class="auth-form__policy-text"> 
                    Bằng việc đăng kí, bạn đã đồng ý với Shopee về 
                    <a href="" class="auth-form__policy-link">Điều khoản về dịch vụ</a> & 
                    <a href="" class="auth-form__policy-link">Chính sách bảo mật</a> 
                </p>`;
            $('.auth-form__controls .btn--primary').innerText = "Đăng ký"
            $('.auth-form__footer .auth-form__footer-text').innerText = "Bạn đã có tài khoản ?"
            $('.auth-form__footer .auth-form__swith-btn').innerText = "Đăng nhập"
        },

        loginApp() {
            const loginBtn = $('.header__navbar-item--bold:last-child')
            loginBtn.onclick = () => {
                    this.login()
            }
        },
        registrationApp() {
            const registrationBtn = $$('.header__navbar-item--bold')[0]
            registrationBtn.onclick = () => {
                this.registration()
            }
        },

        // Thay đôi bảng đăng ký và đăng nhập
        getLogin() {
            const authFormBtn = $('.auth-form__footer .auth-form__swith-btn')
            authFormBtn.onclick = () => {
                if (authFormBtn.innerText === 'Đăng nhập') {
                    this.login()
                }
                else {
                    this.registration()
                }
            }
        },

        //  Lựa chọn giá
        priceSelector() {

            const prices = $$('.select-input__item')
            const priceSelect = $('.select-input')
            const isCheckPrice = false;


            prices.forEach(function(item, index){
                item.onclick = function(e){
                    e.preventDefault()
                    this.isCheckPrice = !this.isCheckPrice;
                    this.classList.toggle('open', this.isCheckPrice)
                }
                
            })

            // Click vào giá hiện bảng ul
            priceSelect.onclick = function() {
                switch ($('.select-input__list').style.display) {
                    case '':
                    case 'none':
                        $('.select-input__list').style.display = 'block'
                        break;
                    case 'block':
                        $('.select-input__list').style.display = 'none'
                        break;
                }  
            }
        },

        

        // Yêu thích và đánh giá

        rateProduct() {
            const productsLike = $$('.home-product-item__like')
            if(productsLike) {
                productsLike.forEach(function(productLike) {
                    productLike.onclick = function(e) {
                        e.preventDefault()
                        const isProductlike = productLike.classList.contains('home-product-item__like-liked')
                        if (!isProductlike) {
                            this.classList.add('home-product-item__like-liked') 
                        } else {
                            this.classList.remove('home-product-item__like-liked') 
                        }
                    }
                })
            }

            const productsRating = $$('.home-product-item__rating')
            productsRating.forEach(function(productRating) {
                productRating.onclick = function(e) {
                    e.preventDefault()
                }
            })
        },

        headerOp() {
            const headerOptions = $('.header__search-select')
            if (headerOptions) {
                headerOptions.onclick = (e) => {
                    const headerOption = document.createElement('ul')
                    if (e.target.closest('.header__search-option-item')) {

                    }                 
                    else {
                        headerOption.onclick = function(e) {
                            // e.target.innerHTML = '<span>Trong shop</span> <i class="fas fa-check"></i>'

                            if (e.target.closest('.header__search-option-item')) {
                                headerOptions.removeChild(headerOption);
                            }
                            console.log(1)
                        }
                        headerOption.classList.add('header__search-option')
                        headerOption.innerHTML = `
                            <li class="header__search-option-item">
                            <span>Trong shop</span>
                            </li>
                            <li class="header__search-option-item">
                                <span>Ngoài shop</span>
                            </li>
                        `;
                        headerOptions.appendChild(headerOption)
                    }
                }
            } 
        },

        // Mua hàng
        byProduct() {
            const  byProductBtn = $$('.product-item__by');
            if(byProductBtn) {
                byProductBtn.forEach(productBy => {
                    productBy.onclick = (e) => {
                        e.preventDefault()
                        const product = e.target.closest('.home-product-item')
                        console.log(product)
                    }
                })
            }
        },

        // Xóa sản phẩm đã mua
        getParent(element, selector) {
            while (element.parentElement) {
                if (element.parentElement.matches(selector)) {
                    return element.parentElement
                }
                element = element.parentElement
            }
        },

        cartProductRemove()  {
            cartRemove.forEach((item) => {
                item.onclick = () => {
                    this.getParent(item, '.header__notify-item').remove()
                    if(!$('.header__search-cart .header__notify-list li')) {
                        $('.header__cart-logo').style.display = 'flex'
                    }
                }
            })
        
            if(!$('.header__search-cart .header__notify-list li')) {
                $('.header__cart-logo').style.display = 'flex'
            }
        },

        // Lựa chọn danh mục sản phầm
        productSelection() {
            const homeFilterBtn = $$('.home-filter .btn')
            homeFilterBtn.forEach(function(items){
                items.onclick = function(){
                    const item = items.classList.contains('btn--primary')
                    if(!item){
                        $('.home-filter .btn--primary').classList.remove('btn--primary')
                        this.classList.add('btn--primary')
                    }    
                }
            })
        },

        clickOutside() {
            document.addEventListener('click', (e) => {
                const isSelectInput = $('.select-input').contains(e.target);
                const isHeaderSearch = $('.header__search').contains(e.target)
                if(!isSelectInput) {
                    $('.select-input__list').style.display = 'none'
                }
                if(!isHeaderSearch) {
                    $('.header__search-history').style.display = 'none'
                }
            })
        },
        start() {
            this.render()
            //loginApp
            this.loginApp()
            this.registrationApp()
            this.getLogin()

            // Lựa chọn selector product
            this.priceSelector();

            // Đánh giá sản phẩm
            // this.rateProduct();
            this.headerOp();
            // Mua hàng
            // XÓa sản phẩm đã mua
            this.cartProductRemove();

            // Lựa chọn danh mục sản phầmv
            this.productSelection()

            //Click Outside
            this.clickOutside();
        }
    }
})()

apps.start()
