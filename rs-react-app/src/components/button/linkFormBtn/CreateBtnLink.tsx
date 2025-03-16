import { Link } from 'react-router';
import styles from './CreateBtnLink.module.css';

type ButtonProps = {
  typeProps: 'un-control-form' | 'control-form' | '/';
  text?: string;
};

const CreateBtnLink: React.FC<ButtonProps> = ({ typeProps, text }) => {
  return (
    <>
      <Link className={styles['link-Btn-to-form']} to={typeProps}>
        {text ?? typeProps}
      </Link>
    </>
  );
};

export default CreateBtnLink;
