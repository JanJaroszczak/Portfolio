import account from '../../assets/onlineShop/account.gif';
import products from '../../assets/onlineShop/products.gif';
import popper from '../../assets/onlineShop/popper.gif';
import design from '../../assets/onlineShop/design.gif';
import contact from '../../assets/onlineShop/contact.gif';
import cart from '../../assets/onlineShop/cart.gif';
import checkout from '../../assets/onlineShop/checkout.gif';

export const onlineShopMainInfo = {
  pageTitle: 'Online Shop',
  sectionHeading: 'E-Commerce store with football shoes',
  projectOverview:
    'Users can register, edit accounts, use contact form, search products, edit cart and submit payments. The website has a fully responsive design – from 280px foldable mobiles to desktops.',
  usedTechnologies:
    'HTML, CSS, JavaScript, React, Redux, React Router, Google Firebase, Formik, Yup, EmailJS, Material-UI, Swiper, Styled Components, Responsive Web Design, Atomic Design.',
  gitHubLink: 'https://github.com/JanJaroszczak/React-Online-Shop',
  liveVersionLink: 'https://github.com/JanJaroszczak/React-Online-Shop',
};

export const onlineShopFeatures = [
  {
    featureDescription:
      'Users can create an account which stores orders history, contact data and provides possibility to edit them as well as changing password and account email. User data is stored in Firestore database.',
    gif: account,
    gifAlt: 'account gif',
  },
  {
    featureDescription:
      'Products data is stored in Google Firestore database. Products can be filtered and sorted depending on user’s preferences. On product page, users may choose a size, add the product to the cart and browse through product gallery created with Swiper.',
    gif: products,
    gifAlt: 'products gif',
  },
  {
    featureDescription:
      'A fully functional products search function is implemented – created with an own code and a displayed in a form of a custom popper. Users can operate the popper with both mouse and keyboard.',
    gif: popper,
    gifAlt: 'search popper gif',
  },
  {
    featureDescription:
      'Great majority of the layout was created with custom Styled Components. Header, product cards swiper and photo galleries were created with Swiper and modals with Material-UI.',
    gif: design,
    gifAlt: 'design gif',
  },
  {
    featureDescription:
      'Contact page has a custom Google Map implemented to fit the color palette of the project. Users can also use a contact form to send a message to page owner. Contact form backend is managed by EmailJS.',
    gif: contact,
    gifAlt: 'contact gif',
  },
  {
    featureDescription:
      'The website offers an editable cart. After adding a product to cart, a modal with the cart content is displayed. Users can open cart details page product quantity can be edited or a product can be fully removed from the cart. Once cart check is done, users may proceed to checkout.',
    gif: cart,
    gifAlt: 'cart gif',
  },
  {
    featureDescription:
      '3.7.	Having proceeded to checkout users are asked to fill in their data. After filling it in, users will be asked if they want to save the added date on their account. If users had already their data saved on the account earlier, the form will be pulled automatically from the database while opening the checkout page. Having the data filled and terms and conditions accepted, users can go to payment which is implemented with a use of Paypal sandbox.',
    gif: checkout,
    gifAlt: 'checkout gif',
  },
  // {
  //   featureDescription:
  //     'Products data is stored in Google Firestore database. Products can be filtered and sorted depending on user’s preferences. On product page, users may choose a size, add the product to the cart and browse through product gallery created with Swiper.',
  //   gif: project1,
  //   gifAlt: 'products gif',
  // },
  // {
  //   featureDescription:
  //     'Products data is stored in Google Firestore database. Products can be filtered and sorted depending on user’s preferences. On product page, users may choose a size, add the product to the cart and browse through product gallery created with Swiper.',
  //   gif: project1,
  //   gifAlt: 'products gif',
  // },
];
