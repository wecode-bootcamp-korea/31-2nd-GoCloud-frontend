import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config';
import axios from 'axios';

const KaKaoLogin = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    const option = {
      url: `${API.kakaologin}?code=${code}`,
    };

    axios(option).then(res => {
      localStorage.setItem('access_token', res.data.token);
      navigate('/');
    });
  }, [code, navigate]);
};

export default KaKaoLogin;
