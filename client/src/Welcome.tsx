interface WelcomeProps {
  username: string;
  onLogout: () => void;
}
const Welcome = ({ username, onLogout }: WelcomeProps) => {
  return (
    <div className="container mt-5 text-center">
      <div className="card p-5 shadow-lg">
        <h2 className="mb-4">Hoş geldin, <span className="text-primary">{username.toUpperCase()}</span>!</h2>
        <button className="btn btn-outline-danger" onClick={onLogout}>
          Çıkış Yap
        </button>
      </div>
    </div>
  );
};
export default Welcome;
