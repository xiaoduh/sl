import "../styles/index.scss";

export default function Home() {
  return (
    <main>
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="nav navbar-nav navbar-left-center" href="index.html">
              <img src="/logo_Syslearn.svg"></img>
            </a>
          </div>

          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#top">Accueil</a>
              </li>
              <li>
                <a href="#feature">Qui sommes-nous ?</a>
              </li>
              <li>
                <a href="#work-shop">Technologies numérique</a>
              </li>
              <li>
                <a href="#courses">Services</a>
              </li>
              <li>
                <a href="#pricing">Valeurs</a>
              </li>
              <li>
                <a href="#recrutement">Recrutement</a>
              </li>
              <li class="btn-trial">
                <a href="#contact">Contactez-nous</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="modal fade" id="login" role="dialog">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                ×
              </button>
              <h4 class="modal-title text-center form-title">Login</h4>
            </div>
            <div class="modal-body padtrbl">
              <div class="login-box-body">
                <p class="login-box-msg">Sign in to start your session</p>
                <div class="form-group">
                  <form name="" id="loginForm">
                    <div class="form-group has-feedback">
                      <input
                        class="form-control"
                        placeholder="Username"
                        id="loginid"
                        type="text"
                        autocomplete="off"
                      ></input>
                      <span></span>
                      <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                      <input
                        class="form-control"
                        placeholder="Password"
                        id="loginpsw"
                        type="password"
                        autocomplete="off"
                      ></input>
                      <span id="span_loginpsw"></span>
                      <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div class="row">
                      <div class="col-xs-12">
                        <div class="checkbox icheck">
                          <label>
                            <input type="checkbox" id="loginrem"></input>
                          </label>
                        </div>
                      </div>
                      <div class="col-xs-12">
                        <button
                          type="button"
                          class="btn btn-green btn-block btn-flat"
                          onclick="userlogin()"
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner">
        <div class="bg-color">
          <div class="container">
            <div class="row">
              <div class="banner-text text-center">
                <div class="text">
                  <h4 class="text-dec"> </h4>
                </div>

                <div class="intro-para text-center quote">
                  <p class="big-text">Welcome to Syslearn</p>
                  <p class="small-text">
                    Nous croyons au pouvoir de la technologie !{" "}
                  </p>
                  <p class="small-text">
                    {" "}
                    Notre Devise : Qualité &amp; Confiance{" "}
                  </p>
                </div>
                <a href="#feature" class="mouse-hover">
                  <div class="mouse"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="feature" class="section-padding">
        <div class="container">
          <div class="row">
            <div class="header-section text-center">
              <h2>Qui Sommes-nous</h2>
              <p>
                Créée en 2019, notre organisation accompagne la stratégie de
                développement de ses clients dans le domaine des services
                d’ingénierie informatique. La mission de Syslearn est de fournir
                des services informatiques personnalisés pour aider ses clients
                à améliorer leurs capacités et faire face aux enjeux de la
                transformation numérique. Notre équipe dotée d’une vision
                innovante, une adaptabilité irréprochable et une connaissance
                éprouvée dans des secteurs d’activités variés permets
                d’intervenir dans les domaines suivants : ( Développement des
                applications mobile, Développement web, Intelligence
                artificielle, Data science ,Solutions sur mesure qui s’adaptent
                précisément à votre environnement informatique). La diversité de
                nos expériences individuelles et collectives nous permet
                aujourd’hui a acquis un savoir-faire, des compétences et de
                mener à bien tout projet informatique avec tous ses aspects
                (Innovation , engagement, honnêteté, intégrité, expertise).
                Cette expertise nous permet ainsi d'offrir à nos clients des
                solutions à haute valeur ajoutée.
              </p>
            </div>
            <div class="feature-info">
              <div class="fea">
                <div class="col-md-4">
                  <div class="heading pull-right">
                    <h4>Un conseil personnalisé</h4>
                    <p>
                      Syslearn propose un accompagnement personnalisé en
                      fonction de votre problématique, de votre secteur et de
                      votre cible pour assurer la réussite de vos projets avec
                      des solutions qui répondent à vos objectifs.
                    </p>
                  </div>
                  <div class="fea-img pull-left">
                    <i class="fa fa-css3"></i>
                  </div>
                </div>
              </div>
              <div class="fea">
                <div class="col-md-4">
                  <div class="heading pull-right">
                    <h4>Suivi Qualité</h4>
                    <p>
                      Une équipe Qualité analyse systématiquement les
                      évaluations des projets. En liaison avec les intervenants
                      experts et l’équipe pédagogique, elle met en œuvre les
                      mesures appropriées pour garantir la satisfaction des
                      clients.
                    </p>
                  </div>
                  <div class="fea-img pull-left">
                    <i class="fa fa-drupal"></i>
                  </div>
                </div>
              </div>
              <div class="fea">
                <div class="col-md-4">
                  <div class="heading pull-right">
                    <h4>La garantie de satisfaction</h4>
                    <p>
                      Parce que le client est au centre de notre univers, sa
                      satisfaction est notre objectif et sa réussite est la
                      nôtre.
                    </p>
                  </div>
                  <div class="fea-img pull-left">
                    <i class="fa fa-trophy"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="organisations" class="section-padding">
        <div class="container">
          <div class="row">
            <div class="header-section text-center">
              <h2>S'abonner à la Newsletters!</h2>
            </div>
            <p class="cta-2-txt">
              Abonnez-vous pour recevoir en exclusivité les dernières news, nous
              les enverrons directement dans votre boîte e-mails.
            </p>
            <div class="cta-2-form text-center">
              <form action="#" method="post" id="workshop-newsletter-form">
                <input
                  name=""
                  placeholder="Enter Your Email Address"
                  type="email"
                ></input>
                <input
                  class="cta-2-form-submit-btn"
                  value="S'inscrire"
                  type="submit"
                ></input>
              </form>

              <p class="cta-2-txt">-----------------</p>
            </div>
          </div>
        </div>
      </section>

      <section id="work-shop" class="section-padding">
        <div class="container">
          <div class="row">
            <div class="header-section text-center">
              <h2>Technologies numérique</h2>
              <p>
                Syslearn a pour mission de vous accompagner dans vos projets en
                mettant à votre disposition des offres selon votre besoin. Pour
                vos projets quel que soit la technologie ou la solution dont
                vous avez besoin : Software Products (AI), IHM, les systèmes
                d'information, les technologies web, les systèmes embarqués,
                IoT, développement mobile, la gestion de projet, business
                intelligence, SGBD, CAO, Simulation 3D, réalité virtuelle et
                augmentée.
              </p>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="service-box text-center">
                <div class="icon-text">
                  <h4 class="ser-text">Technologies Web</h4>
                </div>
                <div class="icon-box">
                  <img src="/html5_logo.png"></img>
                </div>
                <div class="icon-text">
                  <h4 class="ser-text">
                    HTML5, Angular, PHP, CSS, JS, FLEX, J2EE ...
                  </h4>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="service-box text-center">
                <div class="icon-text">
                  <h4 class="ser-text">Développement Logiciel</h4>
                </div>
                <div class="icon-box">
                  <img src="/java_logo.png"></img>
                  <img src="/C++_Logo.png"></img>
                </div>
                <div class="icon-text">
                  <h4 class="ser-text">
                    C / C++, C#, .Net, Python, Java / J2EE ...
                  </h4>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="service-box text-center">
                <div class="icon-text">
                  <h4 class="ser-text">Interface Logiciel</h4>
                </div>
                <div class="icon-box">
                  <img src="/qt_logo.png"></img>
                  <img src="/swing_Logo.png"></img>
                </div>
                <div class="icon-text">
                  <h4 class="ser-text">QT, QML, MFC, WPF, Java Swing ...</h4>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="service-box text-center">
                <div class="icon-text">
                  <h4 class="ser-text">Base de données</h4>
                </div>
                <div class="icon-box">
                  <img src="/mysql_logo.png"></img>
                  <img src="/oracle_Logo.png"></img>
                </div>
                <div class="icon-text">
                  <h4 class="ser-text">
                    MySql, SQLite, PostgreSQL, Oracle, MongoDB ...
                  </h4>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="service-box text-center">
                <div class="icon-text">
                  <h4 class="ser-text">CAO / Simulation 3D</h4>
                </div>
                <div class="icon-box">
                  <img src="/sw_logo.png"></img>
                  <img src="/catia_Logo.png"></img>
                </div>
                <div class="icon-text">
                  <h4 class="ser-text">Catia, SolidWorks ...</h4>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="service-box text-center">
                <div class="icon-text">
                  <h4 class="ser-text">RV / RA</h4>
                </div>
                <div class="icon-box">
                  <img src="/unity_logo.png"></img>
                  <img src="/ar_Logo.png"></img>
                </div>
                <div class="icon-text">
                  <h4 class="ser-text">Unity 3D, ARToolKit ...</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="courses" class="section-padding">
        <div class="container">
          <div class="row">
            <div class="header-section text-center">
              <h2>Nos Services</h2>
              <p>
                Syslearn est un acteur dynamique dans les métiers du{" "}
                <strong>
                  conseil et des services d’ingénierie informatique
                </strong>
                . Notre mission consiste à accompagner nos clients dans la mise
                en place de solutions performantes.
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6 padleft-right">
              <figure class="imghvr-fold-up">
                <img src="/course01.jpg" class="img-responsive"></img>
                <figcaption>
                  <h3> Développement des applications mobile</h3>
                  <p>
                    Dans un monde tourné vers les nouvelles technologies,
                    Syslearn permet à votre entreprise de créer un lien avec
                    votre audience à travers une application qui simplifie
                    l’accès à vos contenus....
                  </p>
                </figcaption>
              </figure>
            </div>
            <div class="col-md-4 col-sm-6 padleft-right">
              <figure class="imghvr-fold-up">
                <img src="/course02.jpg" class="img-responsive"></img>
                <figcaption>
                  <h3>Formation</h3>
                  <p>
                    SYSLEARN vous propose des formations et du coaching en
                    informatique de très haut niveau sur tous les aspects liés
                    au Web, développement logiciel et plus largement aux
                    technologies numériques.
                  </p>
                </figcaption>
              </figure>
            </div>
            <div class="col-md-4 col-sm-6 padleft-right">
              <figure class="imghvr-fold-up">
                <img src="/course03.jpg" class="img-responsive"></img>
                <figcaption>
                  <h3>Développement web</h3>
                  <p>
                    Nous développons des sites web selon les standards de
                    qualité les plus élevés pour que l’expérience utilisateur
                    (UX) de vos clients soit la meilleure possible....
                  </p>
                </figcaption>
              </figure>
            </div>
            <div class="col-md-4 col-sm-6 padleft-right">
              <figure class="imghvr-fold-up">
                <img src="/course04.jpg" class="img-responsive"></img>
                <figcaption>
                  <h3> Intelligence artificielle</h3>
                  <p>
                    La technologie de l’IA améliore les performances et la
                    productivité de l’entreprise en automatisant des processus
                    ou des tâches qui nécessitaient auparavant des ressources
                    humaines....
                  </p>
                </figcaption>
              </figure>
            </div>
            <div class="col-md-4 col-sm-6 padleft-right">
              <figure class="imghvr-fold-up">
                <img src="/course05.jpg" class="img-responsive"></img>
                <figcaption>
                  <h3>Data science</h3>
                  <p>
                    Nos ingénieurs data science mettent en œuvre tout leur
                    savoir-faire pour traiter toutes vos problématiques liées
                    aux grandes masses de données : collecte, stockage, analyse
                    en temps réel, diffusion et visualisation de données
                    volumineuses...
                  </p>
                </figcaption>
              </figure>
            </div>
            <div class="col-md-4 col-sm-6 padleft-right">
              <figure class="imghvr-fold-up">
                <img src="/course06.jpg" class="img-responsive"></img>
                <figcaption>
                  <h3>Solutions sur mesure</h3>
                  <p>
                    Nous développons des solutions innovantes clé en main avec
                    des modules interfaçables avec tout type de systèmes
                    d’informations pour répondre au mieux au besoin de nos
                    clients.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" class="section-padding">
        <div class="container">
          <div class="row">
            <div class="header-section text-center">
              <h2>Nos Valeurs, notre excellence</h2>

              <p>
                Innovation, engagement, honnêteté, intégrité, expertise sont nos
                valeurs communes. Elles nous permettent d’être un véritable
                partenaire de confiance pour nos clients.
              </p>
              <p></p>

              <p>
                <strong>Innovation </strong>
              </p>
              <div class="header-section text-center">
                Nous mettons l’innovation au cœur de notre stratégie de
                développement et intervenons dans les domaines liés aux
                mutations technologiques. Nous cherchons constamment à nous
                améliorer dans toutes nos activités et encourageons une culture
                d’innovation afin d’assurer le développement continu de nouveaux
                produits et services répondant aux besoins de nos clients.
                <p></p>
              </div>

              <div class="header-section text-center">
                <strong>Engagement</strong>
                <div class="header-section text-center">
                  <p>
                    Nous embauchons des personnes motivées, engagées et
                    passionnées par leur profession. Notre volonté de donner
                    satisfaction à nos clients est un aspect primordial dans
                    l’exécution de nos missions, chez nous la capacité à
                    respecter nos engagements quels qu’ils soient...
                  </p>
                  {/* <hr class="bottom-line"> */}
                </div>

                <div class="header-section text-center">
                  <strong>Honnêteté</strong>
                  <div class="header-section text-center">
                    <p>
                      La transparence et la responsabilité nous guident dans
                      l’exercice de nos activités professionnelles. Nous
                      considérons que la création de valeur ajoutée de façon
                      durable exige un comportement honnête et responsable
                      vis-à-vis de la société. Nous faisons donc preuve de
                      sérieux dans nos engagements, que ce soit dans notre
                      travail ou dans nos relations avec les clients.
                    </p>
                  </div>

                  <div class="header-section text-center">
                    <strong>Intégrité</strong>
                    <div class="header-section text-center">
                      <p>
                        Nous croyons que le meilleur garant de notre réputation
                        est le maintien d’un haut niveau d’intégrité et de
                        déontologie dans toutes nos activités quotidiennes.
                      </p>
                      {/* <hr class="bottom-line"> */}
                    </div>
                    <div class="header-section text-center">
                      <strong>Expertise</strong>
                      <div class="header-section text-center">
                        <p>
                          Syslearn accompagne des entreprises de tailles et
                          secteurs d’activité différents. Grâce à son expertise
                          et à la pluridisciplinarité de ses équipes, elle vous
                          aide à activer les leviers de la stratégie
                          d’entreprise
                        </p>
                        {/* <hr class="bottom-line"> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recrutement" class="section-padding">
        <div class="container">
          <div class="row">
            <div class="header-section text-center">
              <h2>Recrutement</h2>

              <p>
                Nous sommes une famille où la confiance, la communication et la
                transparence sont les maîtres mots ! Si vous partagez ces mêmes
                valeurs et que vous souhaitez évoluer dans un environnement
                dynamique, rejoignez-nous !
              </p>
              <p></p>

              <p>
                <strong>
                  {" "}
                  <big> Ingénieur PHP/Symfony </big>{" "}
                </strong>
              </p>
              <p>
                De formation supérieure BAC+5 ingénieur en informatique, vous
                avez au min 2 ans d’expériences significatives dans un poste
                similaire. Une bonne connaissance technique autour des
                technologies PHP, Symfony, Ansible, Github, Js/Jquery, Unix,
                Angular Js, Bootstrap, etc... Vos qualités relationnelles, votre
                capacité d’intégration et d’adaptation ainsi que votre
                communication sont vos atouts.
              </p>
              <p></p>

              <p>
                <strong>
                  {" "}
                  <big> Ingénieur JAVA/JEE/Spring MVC </big>{" "}
                </strong>
              </p>
              <p>
                De formation supérieure Bac+5 ingénieur en informatique, vous
                disposez de solides connaissances techniques en Java, Jenkins,
                Maven, Tomcat et maîtrisez également les bases de données SQL.
                Des notions en Javascript, Css, Linux, Spring, Hibernate sont un
                plus. Vous êtes reconnu(e) pour votre implication et votre
                créativité. Passionné(e) de développement et par les nouvelles
                technologies, vous souhaitez rejoindre une équipe dynamique.
              </p>
              <p></p>

              <p>
                <strong>
                  {" "}
                  <big>
                    Ingénieur Linux Embarqué (Développement C/ C++){" "}
                  </big>{" "}
                </strong>
              </p>
              <p>
                Ingénieur en informatique ou électronique, vous avez une
                expérience entre 3 et 5 ans. Vous maîtrisez le français et
                l'anglais qui vous permet de bien communiquer quotidiennement
                avec nos partenaires. Les compétences techniques requises sont :
                développement C/C++, jenkins, Git, Oracle, SQL.
              </p>
              <p></p>

              <p>
                <strong>
                  {" "}
                  <big> Ingénieur Python Django Web API </big>{" "}
                </strong>
              </p>
              <p>
                De formation supérieure Bac+5 ingénieur en informatique. Vous
                maîtrisez très bien le langage Python et les Web API Rest. Vous
                êtes dynamique, organisé, présentable, un bon développeur et un
                bon communicant. Les compétences techniques requises sont : •
                Python • GIT • JSON • UML • Web API • Scrum Compétences
                souhaitées : • Django • MySQL • Design pattern
              </p>
              <p></p>

              <p>
                <strong>
                  {" "}
                  <big> Ingénieur Angular et/ Ou React</big>{" "}
                </strong>
              </p>
              <p>
                De formation supérieure Bac+5 ingénieur en informatique. Vous
                maîtrisez très bien les technologies Front. Les compétences
                techniques requises sont : • Angular • React • Javascript •
                Typescript • GIT • MySQL • CSS • HTML5 • Bootstrap • JSON • XML
                • UML Compétences souhaitées : • Azure Cloud • C#.Net
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="contact" class="section-padding">
        <div class="container">
          <div class="row">
            <div class="header-section text-center">
              <h2>Contactez-nous ?</h2>
              <p>
                Pour toute demande de devis, de conseils ou de rendez-vous,{" "}
                remplissez le formulaire ci-dessous !{" "}
              </p>
            </div>
            <div id="sendmessage">Votre message a été envoyé. Merci!</div>
            <div id="errormessage"></div>
            <form action="" method="post" role="form" class="contactForm">
              <div class="col-md-6 col-sm-6 col-xs-12 left">
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control form"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  ></input>
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  ></input>
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  ></input>
                  <div class="validation"></div>
                </div>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-12 right">
                <div class="form-group">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                  <div class="validation"></div>
                </div>
              </div>

              <div class="col-xs-12">
                <button
                  type="submit"
                  id="submit"
                  name="submit"
                  class="form contact-form-button light-form-button oswald light"
                >
                  ENVOYER
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}
      <footer id="footer" class="footer">
        <div class="container text-center">
          <div
            class="moto-widget moto-widget-row row-fixed moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
            data-widget="row"
            data-bg-position="left top"
            data-spacing="aaaa"
            data-grid-type="sm"
          >
            <div class="container-fluid">
              <div class="row" data-container="container">
                <div
                  class="moto-widget moto-widget-row__column moto-cell col-sm-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                  data-container="container"
                  data-widget="row.column"
                  data-bg-position="left top"
                  data-spacing="aaaa"
                >
                  <div
                    class="moto-widget moto-widget-container moto-container_content_5de00a774"
                    data-container="container"
                    data-widget="container"
                    data-bg-position="top"
                    data-css-name="moto-container_content_5de00a774"
                  >
                    <div
                      class="moto-widget moto-widget-text moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                      data-widget="text"
                      data-spacing="sasa"
                      data-preset="default"
                      data-visible-on="mobile-v"
                      data-animation=""
                    >
                      <div class="moto-widget-text-content moto-widget-text-editable">
                        <p class="moto-text_system_14">
                          <span class="fa"></span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                    data-widget="text"
                    data-spacing="aaaa"
                    data-preset="default"
                    data-visible-on="mobile-v"
                    data-animation=""
                  >
                    <div class="moto-widget-text-content moto-widget-text-editable">
                      <h3 class="moto-text_system_1"></h3>
                      <p class="moto-text_normal">01 79 62 91 65</p>
                    </div>
                  </div>
                </div>
                <div
                  class="moto-widget moto-widget-row__column moto-cell col-sm-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                  data-container="container"
                  data-widget="row.column"
                  data-bg-position="left top"
                  data-spacing="aaaa"
                >
                  <div
                    class="moto-widget moto-widget-container moto-container_content_5de00a775"
                    data-container="container"
                    data-widget="container"
                    data-bg-position="top"
                    data-css-name="moto-container_content_5de00a775"
                  >
                    <div
                      class="moto-widget moto-widget-text moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                      data-widget="text"
                      data-spacing="sasa"
                      data-preset="default"
                      data-visible-on="mobile-v"
                      data-animation=""
                    ></div>

                    <div
                      class="moto-widget moto-widget-text moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                      data-widget="text"
                      data-spacing="sasa"
                      data-preset="default"
                      data-visible-on="mobile-v"
                      data-animation=""
                    >
                      <div class="moto-widget-text-content moto-widget-text-editable">
                        <p class="moto-text_system_14">
                          <span class="fa"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                    data-widget="text"
                    data-spacing="aaaa"
                    data-preset="default"
                    data-visible-on="mobile-v"
                    data-animation=""
                  >
                    <div class="moto-widget-text-content moto-widget-text-editable">
                      <p class="moto-text_normal">
                        <font color="white">
                          <a
                            class="moto-link"
                            href="mailto:contacts@demolink.com"
                            data-action="mail"
                          >
                            contact
                          </a>
                          @syslearn.fr
                        </font>
                      </p>
                      <p class="moto-text_normal">&nbsp;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul class="social-links">
            <li>
              <a href="#link">
                <i class="fa fa-twitter fa-fw"></i>
              </a>
            </li>
            <li>
              <a href="#link">
                <i class="fa fa-facebook fa-fw"></i>
              </a>
            </li>
            <li>
              <a href="#link">
                <i class="fa fa-google-plus fa-fw"></i>
              </a>
            </li>
            <li>
              <a href="#link">
                <i class="fa fa-linkedin fa-fw"></i>
              </a>
            </li>
          </ul>
          Copyright 2022© Syslearn. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
