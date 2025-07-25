const API_URL = 'http://localhost:5000/api';

export async function register(userData) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return await response.json();
}

export async function login(credentials) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  return await response.json();
}

export async function getNearbyDonations(lat, lng) {
  const response = await fetch(`${API_URL}/donations?lat=${lat}&lng=${lng}`);
  return await response.json();
}