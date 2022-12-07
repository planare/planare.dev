import Image from 'next/image';

export default function Home(): JSX.Element {
  return (
    <div>
      <Image src='/pearls.jpg' width={250} height={250} alt={''} />
      <p>Planare LLC</p>
      <p>Brooklyn, NY</p>
      <br />
      <p>mail@planare.dev</p>
      <p>(929) 438 9964</p>
      <br />
      <p>“A development office for the confluent web.”</p>
      <style jsx>{`
        * {
          font-family: system-ui;
        }
        img {
          border-radius: '5rem !important';
        }
      `}</style>
    </div>
  );
}
