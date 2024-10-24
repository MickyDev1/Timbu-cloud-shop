import { FunctionComponent } from 'react';
import styles from './HeroSection.module.css';


const HeroSection:FunctionComponent = () => {
  	return (
    		<div className={styles.heroSection}>
      			<div className={styles.frameParent}>
        				<div className={styles.frameGroup}>
          					<div className={styles.sellersProductsParent}>
            						<div className={styles.sellersProducts}>Sellers Products</div>
            						<b className={styles.menWomenAnd}>Men, women and kids sneaker</b>
          					</div>
          					<div className={styles.rectangleParent}>
            						<img className={styles.frameChild} alt="" src="Rectangle 51.png" />
            						<div className={styles.nameTimbuCloudParent}>
              							<div className={styles.nameTimbuContainer}>
                								<span className={styles.name}>{`Name : `}</span>
                								<span>Timbu Cloud</span>
              							</div>
              							<div className={styles.nameTimbuContainer}>
                								<span className={styles.name}>{`Address : `}</span>
                								<span>Ikeja, Lagos</span>
                								<span className={styles.name}>{` `}</span>
              							</div>
              							<div className={styles.nameTimbuContainer}>
                								<span className={styles.name}>{`Contact: `}</span>
                								<span>09036782573</span>
                								<span className={styles.name}>{` `}</span>
              							</div>
              							<div className={styles.socialsParent}>
                								<div className={styles.socials}>Socials:</div>
                								<div className={styles.akarIconsfacebookFillParent}>
                  									<img className={styles.akarIconsfacebookFill} alt="" src="akar-icons:facebook-fill.png" />
                  									<img className={styles.antDesigninstagramFilledIcon} alt="" src="ant-design:instagram-filled.svg" />
                  									<img className={styles.antDesigninstagramFilledIcon} alt="" src="simple-icons:x.svg" />
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<img className={styles.image1Icon} alt="" src="image 1.png" />
      			</div>
    		</div>);
};

import { FunctionComponent, useCallback } from 'react';
import styles from './Carts.module.css';


const Carts:FunctionComponent = () => {
  	
  	const onFrameContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.carts}>
      			<div className={styles.frameParent}>
        				<div className={styles.frameGroup}>
          					<div className={styles.frameContainer}>
            						<div className={styles.quickLinksParent}>
              							<b className={styles.quickLinks}>Quick Links</b>
              							<div className={styles.homeParent}>
                								<div className={styles.home}>Home</div>
                								<div className={styles.home}>{`Men `}</div>
                								<div className={styles.home}>Women</div>
                								<div className={styles.home}>Kids</div>
                								<div className={styles.home}>Brands</div>
              							</div>
            						</div>
            						<div className={styles.helpParent}>
              							<b className={styles.quickLinks}>Help</b>
              							<div className={styles.homeParent}>
                								<div className={styles.home}>Contact us</div>
                								<div className={styles.home}>Track your order</div>
                								<div className={styles.home}>Returns</div>
                								<div className={styles.home}>Cancel order</div>
                								<div className={styles.home}>Payment option</div>
                								<div className={styles.home}>FAQ</div>
                								<div className={styles.home}>Chat with us</div>
                								<div className={styles.home}>Contact us</div>
              							</div>
            						</div>
            						<div className={styles.helpParent}>
              							<b className={styles.company}>Company</b>
              							<div className={styles.homeParent}>
                								<div className={styles.home}>About us</div>
                								<div className={styles.home}>Blogs</div>
                								<div className={styles.home}>Career</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.helpParent}>
            						<b className={styles.quickLinks}>Follow us</b>
            						<div className={styles.akarIconsfacebookFillParent}>
              							<img className={styles.akarIconsfacebookFill} alt="" src="akar-icons:facebook-fill.png" />
              							<img className={styles.antDesigninstagramFilledIcon} alt="" src="ant-design:instagram-filled.svg" />
              							<img className={styles.antDesigninstagramFilledIcon} alt="" src="simple-icons:x.svg" />
              							<img className={styles.antDesigninstagramFilledIcon} alt="" src="mingcute:pinterest-fill.svg" />
              							<img className={styles.antDesigninstagramFilledIcon} alt="" src="teenyicons:youtube-solid.svg" />
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameWrapper}>
          					<div className={styles.frameDiv}>
            						<div className={styles.termsOfSaleParent}>
              							<div className={styles.termsOfSale}>Terms of sale</div>
              							<div className={styles.termsOfSale}>Terms and Condition</div>
              							<div className={styles.privacyPolicy}> Privacy  Policy</div>
            						</div>
            						<div className={styles.phcopyrightBoldParent}>
              							<img className={styles.phcopyrightBoldIcon} alt="" src="ph:copyright-bold.svg" />
              							<div className={styles.termsOfSale}>2024 Timbucloudshop. All rights reserved</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.cartsInner}>
        				<div className={styles.timbuCloudShopParent}>
          					<b className={styles.termsOfSale}>Timbu cloud shop</b>
          					<div className={styles.frameParent1}>
            						<div className={styles.productsWrapper}>
              							<div className={styles.products}>Products</div>
            						</div>
            						<div className={styles.cartsWrapper}>
              							<div className={styles.products}>Carts</div>
            						</div>
            						<div className={styles.checkoutWrapper} onClick={onFrameContainerClick}>
              							<div className={styles.products}>Checkout</div>
            						</div>
          					</div>
          					<div className={styles.mingcutesearchLineParent}>
            						<img className={styles.antDesigninstagramFilledIcon} alt="" src="mingcute:search-line.svg" />
            						<div className={styles.tdesignuserWrapper}>
              							<div className={styles.tdesignuserWrapper}>
                								<img className={styles.antDesigninstagramFilledIcon} alt="" src="tdesign:user.svg" />
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameParent2}>
        				<div className={styles.frameParent3}>
          					<div className={styles.carts3Wrapper}>
            						<b className={styles.cartSummary}>Carts (3)</b>
          					</div>
          					<div className={styles.frameParent4}>
            						<div className={styles.frameParent5}>
              							<div className={styles.frameParent6}>
                								<div className={styles.subtotalParent}>
                  									<div className={styles.rectangleParent}>
                    										<img className={styles.frameChild} alt="" src="Rectangle 49.png" />
                    										<div className={styles.nikeCourtLegacyLiftXNikeParent}>
                      											<div className={styles.nikeCourtLegacy}>Nike Court Legacy Lift x Nike United</div>
                      											<div className={styles.quickLinks}>
                        												<span>Seller</span>
                        												<span className={styles.timbuCloud}>: Timbu Cloud</span>
                      											</div>
                      											<div className={styles.quickLinks}>
                        												<span>Size</span>
                        												<span className={styles.timbuCloud}>: Timbu Cloud</span>
                      											</div>
                    										</div>
                  									</div>
                  									<div className={styles.ngn120000Parent}>
                    										<b className={styles.quickLinks}>NGN 120,000</b>
                    										<div className={styles.frameWrapper2}>
                      											<div className={styles.frameParent8}>
                        												<img className={styles.frameItem} alt="" src="Frame 10697.svg" />
                        												<div className={styles.termsOfSale}>0</div>
                        												<img className={styles.frameItem} alt="" src="Frame 10698.svg" />
                      											</div>
                    										</div>
                  									</div>
                								</div>
                								<div className={styles.mdibinOutlineParent}>
                  									<img className={styles.mdibinOutlineIcon} alt="" src="mdi:bin-outline.svg" />
                  									<div className={styles.termsOfSale}>Remove</div>
                								</div>
              							</div>
              							<img className={styles.vectorIcon} alt="" src="Vector 13.svg" />
            						</div>
            						<div className={styles.frameParent5}>
              							<div className={styles.frameParent6}>
                								<div className={styles.subtotalParent}>
                  									<div className={styles.rectangleParent}>
                    										<img className={styles.frameChild} alt="" src="Rectangle 49.png" />
                    										<div className={styles.nikeCourtLegacyLiftXNikeParent}>
                      											<div className={styles.nikeCourtLegacy}>Nike Court Legacy Lift x Nike United</div>
                      											<div className={styles.quickLinks}>
                        												<span>Seller</span>
                        												<span className={styles.timbuCloud}>: Timbu Cloud</span>
                      											</div>
                      											<div className={styles.quickLinks}>
                        												<span>Size</span>
                        												<span className={styles.timbuCloud}>: Timbu Cloud</span>
                      											</div>
                    										</div>
                  									</div>
                  									<div className={styles.ngn120000Parent}>
                    										<b className={styles.quickLinks}>NGN 120,000</b>
                    										<div className={styles.frameWrapper2}>
                      											<div className={styles.frameParent8}>
                        												<img className={styles.frameItem} alt="" src="Frame 10697.svg" />
                        												<div className={styles.termsOfSale}>0</div>
                        												<img className={styles.frameItem} alt="" src="Frame 10698.svg" />
                      											</div>
                    										</div>
                  									</div>
                								</div>
                								<div className={styles.mdibinOutlineParent}>
                  									<img className={styles.mdibinOutlineIcon} alt="" src="mdi:bin-outline.svg" />
                  									<div className={styles.termsOfSale}>Remove</div>
                								</div>
              							</div>
              							<img className={styles.vectorIcon} alt="" src="Vector 13.svg" />
            						</div>
            						<div className={styles.frameParent5}>
              							<div className={styles.frameParent6}>
                								<div className={styles.subtotalParent}>
                  									<div className={styles.rectangleParent}>
                    										<img className={styles.frameChild} alt="" src="Rectangle 49.png" />
                    										<div className={styles.nikeCourtLegacyLiftXNikeParent}>
                      											<div className={styles.nikeCourtLegacy}>Nike Court Legacy Lift x Nike United</div>
                      											<div className={styles.quickLinks}>
                        												<span>Seller</span>
                        												<span className={styles.timbuCloud}>: Timbu Cloud</span>
                      											</div>
                      											<div className={styles.quickLinks}>
                        												<span>Size</span>
                        												<span className={styles.timbuCloud}>: Timbu Cloud</span>
                      											</div>
                    										</div>
                  									</div>
                  									<div className={styles.ngn120000Parent}>
                    										<b className={styles.quickLinks}>NGN 120,000</b>
                    										<div className={styles.frameWrapper2}>
                      											<div className={styles.frameParent8}>
                        												<img className={styles.frameItem} alt="" src="Frame 10697.svg" />
                        												<div className={styles.termsOfSale}>0</div>
                        												<img className={styles.frameItem} alt="" src="Frame 10698.svg" />
                      											</div>
                    										</div>
                  									</div>
                								</div>
                								<div className={styles.mdibinOutlineParent}>
                  									<img className={styles.mdibinOutlineIcon} alt="" src="mdi:bin-outline.svg" />
                  									<div className={styles.termsOfSale}>Remove</div>
                								</div>
              							</div>
              							<img className={styles.frameChild6} alt="" src="Vector 13.svg" />
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameParent17}>
          					<div className={styles.cartSummaryWrapper}>
            						<b className={styles.cartSummary}>Cart Summary</b>
          					</div>
          					<div className={styles.frameParent18}>
            						<div className={styles.frameParent19}>
              							<div className={styles.frameParent5}>
                								<div className={styles.subtotalParent}>
                  									<div className={styles.termsOfSale}>Subtotal</div>
                  									<b className={styles.ngn360000}>NGN 360,000</b>
                								</div>
                								<div className={styles.subtotalParent}>
                  									<div className={styles.termsOfSale}>Delivery Fees</div>
                  									<b className={styles.ngn360000}>{`NGN 3,000 `}</b>
                								</div>
                								<div className={styles.subtotalParent}>
                  									<div className={styles.termsOfSale}>Estimated Tax</div>
                  									<b className={styles.ngn360000}>{`NGN 0.00 `}</b>
                								</div>
              							</div>
              							<img className={styles.vectorIcon} alt="" src="Vector 14.svg" />
              							<div className={styles.totalParent}>
                								<div className={styles.termsOfSale}>Total</div>
                								<b className={styles.ngn360000}>{`NGN 363,000 `}</b>
              							</div>
              							<img className={styles.vectorIcon} alt="" src="Vector 15.svg" />
            						</div>
            						<div className={styles.checkoutContainer}>
              							<div className={styles.products}>Checkout</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.cartsChild}>
        				<div className={styles.youMightAlsoLikeParent}>
          					<b className={styles.quickLinks}>You might also like</b>
          					<div className={styles.frameParent21}>
            						<div className={styles.frameParent22}>
              							<div className={styles.rectangleParent1}>
                								<img className={styles.frameChild9} alt="" src="Rectangle 48.png" />
                								<div className={styles.frameParent6}>
                  									<div className={styles.nikeCourtLegacyLiftXNikeParent1}>
                    										<div className={styles.nikeDunkLow}>Nike Court Legacy Lift x Nike United</div>
                    										<div className={styles.womensShoe}>Women’s Shoe</div>
                  									</div>
                  									<div className={styles.nikeDunkLow}>NGN 120,000</div>
                								</div>
              							</div>
              							<div className={styles.rectangleParent1}>
                								<img className={styles.frameChild9} alt="" src="Rectangle 48.png" />
                								<div className={styles.frameParent24}>
                  									<div className={styles.nikeDunkLowParent}>
                    										<div className={styles.nikeDunkLow}>{`Nike Dunk Low `}</div>
                    										<div className={styles.womensShoe}>Men’s Shoe</div>
                  									</div>
                  									<div className={styles.nikeDunkLow}>NGN 120,000</div>
                								</div>
              							</div>
              							<div className={styles.rectangleParent1}>
                								<img className={styles.frameChild9} alt="" src="Rectangle 48.png" />
                								<div className={styles.frameParent24}>
                  									<div className={styles.nikeDunkLowParent}>
                    										<div className={styles.nikeDunkLow}>Nike Air Max 270</div>
                    										<div className={styles.womensShoe}>Little Kids Shoe</div>
                  									</div>
                  									<div className={styles.nikeDunkLow}>NGN 120,000</div>
                								</div>
              							</div>
              							<div className={styles.rectangleParent1}>
                								<img className={styles.frameChild9} alt="" src="Rectangle 48.png" />
                								<div className={styles.frameParent24}>
                  									<div className={styles.nikeDunkLowParent}>
                    										<div className={styles.nikeDunkLow}>Ozmillen Shoes</div>
                    										<div className={styles.womensShoe}>Women’s Shoe</div>
                  									</div>
                  									<div className={styles.nikeDunkLow}>NGN 120,000</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.frameParent22}>
              							<div className={styles.rectangleParent1}>
                								<img className={styles.frameChild9} alt="" src="Rectangle 48.png" />
                								<div className={styles.frameParent6}>
                  									<div className={styles.nikeCourtLegacyLiftXNikeParent1}>
                    										<div className={styles.nikeDunkLow}>Nike Court Legacy Lift x Nike United</div>
                    										<div className={styles.womensShoe}>Women’s Shoe</div>
                  									</div>
                  									<div className={styles.nikeDunkLow}>NGN 120,000</div>
                								</div>
              							</div>
              							<div className={styles.rectangleParent1}>
                								<img className={styles.frameChild9} alt="" src="Rectangle 48.png" />
                								<div className={styles.frameParent24}>
                  									<div className={styles.nikeDunkLowParent}>
                    										<div className={styles.nikeDunkLow}>{`Nike Dunk Low `}</div>
                    										<div className={styles.womensShoe}>Men’s Shoe</div>
                  									</div>
                  									<div className={styles.nikeDunkLow}>NGN 120,000</div>
                								</div>
              							</div>
              							<div className={styles.rectangleParent1}>
                								<img className={styles.frameChild9} alt="" src="Rectangle 48.png" />
                								<div className={styles.frameParent24}>
                  									<div className={styles.nikeDunkLowParent}>
                    										<div className={styles.nikeDunkLow}>Nike Air Max 270</div>
                    										<div className={styles.womensShoe}>Little Kids Shoe</div>
                  									</div>
                  									<div className={styles.nikeDunkLow}>NGN 120,000</div>
                								</div>
              							</div>
              							<div className={styles.rectangleParent1}>
                								<img className={styles.frameChild9} alt="" src="Rectangle 48.png" />
                								<div className={styles.frameParent24}>
                  									<div className={styles.nikeDunkLowParent}>
                    										<div className={styles.nikeDunkLow}>Ozmillen Shoes</div>
                    										<div className={styles.womensShoe}>Women’s Shoe</div>
                  									</div>
                  									<div className={styles.nikeDunkLow}>NGN 120,000</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

import { FunctionComponent, useCallback } from 'react';
import {useNavigate} from "react-router-dom";
import styles from './CheckOut.module.css';


const CheckOut:FunctionComponent = () => {
  	const navigate = useNavigate();
  	
  	const onFrameContainerClick = useCallback(() => {
    		navigate("/");
  	}, [navigate]);
  	
  	return (
    		<div className={styles.checkOut}>
      			<div className={styles.checkOutInner}>
        				<div className={styles.frameParent}>
          					<div className={styles.termsOfSaleParent}>
            						<div className={styles.termsOfSale}>Terms of sale</div>
            						<div className={styles.termsOfSale}>Terms and Condition</div>
            						<div className={styles.privacyPolicy}> Privacy  Policy</div>
          					</div>
          					<div className={styles.phcopyrightBoldParent}>
            						<img className={styles.phcopyrightBoldIcon} alt="" src="ph:copyright-bold.svg" />
            						<div className={styles.termsOfSale}>2024 Timbucloudshop. All rights reserved</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.checkOutChild}>
        				<div className={styles.timbuCloudShopParent}>
          					<b className={styles.termsOfSale}>Timbu cloud shop</b>
          					<div className={styles.frameGroup}>
            						<div className={styles.productsWrapper}>
              							<div className={styles.products}>Products</div>
            						</div>
            						<div className={styles.cartsWrapper}>
              							<div className={styles.products}>Carts</div>
            						</div>
            						<div className={styles.checkoutWrapper} onClick={onFrameContainerClick}>
              							<div className={styles.products}>Checkout</div>
            						</div>
          					</div>
          					<div className={styles.mingcutesearchLineParent}>
            						<img className={styles.mingcutesearchLineIcon} alt="" src="mingcute:search-line.svg" />
            						<div className={styles.frameWrapper}>
              							<div className={styles.frameWrapper}>
                								<img className={styles.mingcutesearchLineIcon} alt="" src="tdesign:user.svg" />
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.checkoutParent}>
        				<b className={styles.checkout1}>Checkout</b>
        				<div className={styles.frameContainer}>
          					<div className={styles.frameDiv}>
            						<div className={styles.frameParent1}>
              							<div className={styles.shippingDetailsParent}>
                								<div className={styles.shippingDetails}>Shipping details</div>
                								<img className={styles.frameChild} alt="" src="Vector 14.svg" />
              							</div>
              							<div className={styles.frameParent2}>
                								<div className={styles.frameParent3}>
                  									<div className={styles.lastNameWrapper}>
                    										<div className={styles.lastName}>Last name*</div>
                  									</div>
                  									<div className={styles.lastNameWrapper}>
                    										<div className={styles.lastName}>First name*</div>
                  									</div>
                								</div>
                								<div className={styles.enterAddressWrapper}>
                  									<div className={styles.lastName}>Enter address*</div>
                								</div>
                								<div className={styles.frameParent3}>
                  									<div className={styles.lastNameWrapper}>
                    										<div className={styles.emailAddress}>Email address*</div>
                  									</div>
                  									<div className={styles.lastNameWrapper}>
                    										<div className={styles.lastName}>Phone number*</div>
                  									</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.frameParent1}>
              							<div className={styles.shippingDetailsParent}>
                								<div className={styles.shippingDetails}>Payment details</div>
                								<img className={styles.frameChild} alt="" src="Vector 14.svg" />
              							</div>
              							<div className={styles.frameParent2}>
                								<div className={styles.enterAddressWrapper}>
                  									<div className={styles.lastName}>Name on card*</div>
                								</div>
                								<div className={styles.enterAddressWrapper}>
                  									<div className={styles.lastName}>Card number*</div>
                								</div>
                								<div className={styles.frameParent3}>
                  									<div className={styles.lastNameWrapper}>
                    										<div className={styles.emailAddress}>Expiry date*</div>
                  									</div>
                  									<div className={styles.lastNameWrapper}>
                    										<div className={styles.emailAddress}>CVV Code*</div>
                  									</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.frameWrapper1}>
              							<div className={styles.purchaseItemsWrapper}>
                								<div className={styles.products}>Purchase Items</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.frameParent8}>
            						<div className={styles.frameParent1}>
              							<div className={styles.shippingDetailsParent}>
                								<div className={styles.shippingDetails}>Your order summary</div>
                								<img className={styles.frameInner} alt="" src="Vector 16.svg" />
              							</div>
              							<div className={styles.frameParent10}>
                								<div className={styles.subtotalParent}>
                  									<div className={styles.termsOfSale}>Subtotal</div>
                  									<b className={styles.ngn360000}>NGN 360,000</b>
                								</div>
                								<div className={styles.subtotalParent}>
                  									<div className={styles.termsOfSale}>Delivery Fees</div>
                  									<b className={styles.ngn360000}>{`NGN 3,000 `}</b>
                								</div>
                								<div className={styles.subtotalParent}>
                  									<div className={styles.termsOfSale}>Estimated Tax</div>
                  									<b className={styles.ngn360000}>{`NGN 0.00 `}</b>
                								</div>
                								<img className={styles.frameInner} alt="" src="Vector 14.svg" />
                								<div className={styles.totalParent}>
                  									<div className={styles.termsOfSale}>Total</div>
                  									<b className={styles.ngn360000}>{`NGN 363,000 `}</b>
                								</div>
                								<img className={styles.frameInner} alt="" src="Vector 15.svg" />
              							</div>
            						</div>
            						<div className={styles.delivery325Container}>
              							<span className={styles.delivery3}>Delivery (3) </span>
              							<span className={styles.businessDaysOnce}>- 2-5 business days once ordered</span>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.weAcceptParent}>
        				<div className={styles.products}>We accept:</div>
        				<div className={styles.mingcutesearchLineParent}>
          					<img className={styles.visaIncIconpng} alt="" src="visa_inc_icon.png.png" />
          					<img className={styles.visaIncIconpng} alt="" src="mastercard_icon.jpeg.png" />
          					<img className={styles.visaIncIconpng} alt="" src="american_express_logo.png.png" />
          					<img className={styles.visaIncIconpng} alt="" src="paypal_logo.png.png" />
        				</div>
      			</div>
    		</div>);
};

export default CheckOut;





