import lottie from 'lottie-web';
import {defineLordIconElement} from 'lord-icon-element';

defineLordIconElement(lottie.loadAnimation);

const LordIcon = () => <lord-icon animation="hover" src="/1-cloud-outline.json" />
export default LordIcon