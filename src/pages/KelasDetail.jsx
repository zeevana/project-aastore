import { useParams, useNavigate } from 'react-router-dom';
import { semuaKelas } from '../data/index';
import { Card } from 'react-bootstrap';

const KelasDetail = () => {
    const { kelasId } = useParams();
    const navigate = useNavigate();

    // Cari kelas berdasarkan ID yang diberikan
    const kelas = semuaKelas.find(kelas => kelas.id === parseInt(kelasId));

    // Periksa apakah kelas ditemukan
    if (!kelas) {
        return <div>Kelas tidak ditemukan</div>;
    }

    // Fungsi navigasi ke halaman pembayaran
    const handleCardClick = (harga) => {
        navigate('/payment', { state: { amount: harga.price, type: harga.type } });
    };

    return (
        <div className='box-kl'>
            <div className='logo-k mb-3'>
                <img src={kelas.image} alt={kelas.title} className='logo-l' />
            </div>

            <h3 className='mb-4'>Harga:</h3>
            <div className="card-container">
                {kelas.price.map((harga, index) => (
                    <Card 
                        key={index} 
                        className="mb-3" 
                        onClick={() => handleCardClick(harga)} 
                        style={{ cursor: 'pointer' }}
                    >
                        <Card.Body className="d-flex align-items-center">
                            <img src={harga.image} alt="gambar" style={{ width: '35px', marginRight: '20px' }} />
                            <div>
                                <Card.Title>{harga.type}</Card.Title>
                                <Card.Text>{harga.price}</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default KelasDetail;
