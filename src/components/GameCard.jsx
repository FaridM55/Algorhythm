import { ArrowRight, Lock } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const GameCard = ({ title, id }) => {
  const navigate = useNavigate();

  const { isAuth } = useSelector((state) => state.auth);

  return (
    <div className='col-md-3 mt-3'>
      <div className='card info-card game-card'>
        <h2>{title}</h2>
        <Button
          variant='contained'
          color='inherit'
          sx={{ background: '#fff', color: '#000' }}
          onClick={() => navigate(`/game/${id}`)}
          disabled={!isAuth}
        >
          {isAuth ? (
            <Box>
              Keçid et
              <ArrowRight />
            </Box>
          ) : (
            <Lock />
          )}
        </Button>
      </div>
    </div>
  );
};

export default GameCard;
