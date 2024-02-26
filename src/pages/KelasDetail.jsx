import { useParams } from 'react-router-dom';
import { semuaKelas } from '../data/index';
import { Card } from 'react-bootstrap';

const KelasDetail = () => {
    const { kelasId } = useParams();

    // Cari kelas berdasarkan ID yang diberikan
    const kelas = semuaKelas.find(kelas => kelas.id === parseInt(kelasId));

    // Periksa apakah kelas ditemukan
    if (!kelas) {
        return <div>Kelas tidak ditemukan</div>;
    }

    return (
        <div className='box-kl'>
            {/* <h2 className='title-padding'>List Harga {kelas.title}</h2> */}
            <div className='logo-k mb-3'>
                <img src={kelas.image} alt={kelas.title} className='logo-l' />
            </div>

            <h3 className='mb-4'>Harga:</h3>
            <div className="card-container">
                {kelas.price.map((harga, index) => (
                    <Card key={index} className="mb-3">
                        <Card.Body>
                            <Card.Title>{harga.type}</Card.Title>
                            <Card.Text>{harga.price}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>

        </div>
    );
};

export default KelasDetail;