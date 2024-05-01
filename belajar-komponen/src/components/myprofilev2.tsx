import Image from 'next/image';

// Komponen Card
const Card = ({ title, children }: any) => (
  <div className="card">
    <div className="card-content">
      <h1>{title}</h1>
      {children}
    </div>
  </div>
);

export function MyProfileV2() {
  return (
    <div>
      <Card title="Foto">
        <Image
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      

      <Card title="Tentang">
        <p>Aklilu Lemma adalah seorang ilmuwan terkemuka dari Etiopia yang telah menemukan pengobatan alami untuk skistosomiasis.</p>
      </Card>
    </div>
  );
}
