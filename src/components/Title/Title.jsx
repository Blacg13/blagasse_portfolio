import style from './Title.module.css';
const Title = () => {
  return (
    <section className={style['title-all']}>
      <div className={style['title-me']}>
        <img
          src='/images/resume_pic.jpg'
          alt='photo corporate of Bénédicte Lagasse'
        />
        <div className={style['title-title']}>
          <h1>Bénédicte Lagasse</h1>
          <h2>Web Developer</h2>
        </div>
      </div>
      <div className={style['title-links']}>
        <a target='_blank' href='/files/CV_Lagasse_frontendDev.pdf'>
          <img src='/icons/file-icon.html' alt='' id='file-icon' />
          <p>resume</p>
        </a>
        <a target='_blank' href='https://github.com/Blacg13'>
          <img src='/icons' alt='' id='logo-github' />
          <p>github</p>
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/b%C3%A9n%C3%A9dicte-lagasse/'>
          <img src='' alt='' id='logo-linkedin' />
          <p>linkedin</p>
        </a>
      </div>
    </section>
  );
};
export default Title;
