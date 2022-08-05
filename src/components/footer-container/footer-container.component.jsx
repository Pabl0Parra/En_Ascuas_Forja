import Footer from "../footer/footer.component";
import Icon from "../icons/icon.component";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href='/shop'>Shop</Footer.Link>
            <Footer.Link href='/shop/'>Clients</Footer.Link>
            <Footer.Link href='/shop/'>Testimonials</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Shop</Footer.Title>
            <Footer.Link href='/shop/hats'>Hats</Footer.Link>
            <Footer.Link href='/shop/jackets'>Jackets</Footer.Link>
            <Footer.Link href='/shop/mens'>Mens</Footer.Link>
            <Footer.Link href='/shop/womens'>Womens</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href='!#'>United States</Footer.Link>
            <Footer.Link href='!#'>United Kingdom</Footer.Link>
            <Footer.Link href='!#'>Australia</Footer.Link>
            <Footer.Link href='!#'>Support</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href='!#'>
              <Icon className='fab fa-facebook-f' />
              Facebook
            </Footer.Link>
            <Footer.Link href='!#'>
              <Icon className='fab fa-instagram' />
              Instagram
            </Footer.Link>
            <Footer.Link href='!#'>
              <Icon className='fab fa-youtube' />
              Youtube
            </Footer.Link>
            <Footer.Link href='!#'>
              <Icon className='fab fa-twitter' />
              Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
