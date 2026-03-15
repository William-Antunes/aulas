import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';


type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  // const [numero, setNumero] = useState(0);

  // function handleClick() {
  //   setNumero(PrevState => PrevState + 1);
  // }
  
  return (
    <>
      {/* <Heading>
        Contador: {numero}
      </Heading>

      <button onClick={handleClick}>
        Incrementar
      </button> */}
  
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

        { children }

      <Container>
        <Footer />
      </Container>      

    </>
  );
}
