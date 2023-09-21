import CloseIcon from '@mui/icons-material/Close';
import './ModalEditPhotoProfile.css';

export const ModalEditPhotoProfile = ({
  children,
  openModalProfile,
  closeModalProfile,
  title = 'Add Profile Photo',
}) => {
  return (
    <>
      {openModalProfile && (
        <div className="modalEditProfile-overlay">
          <div className="modalEditProfile-container">
            <h3 className="modalEditProfile-title">{title}</h3>
            <button onClick={() => closeModalProfile(false)}>
              <CloseIcon className="modalEditProfile-iconClose" />
            </button>
            <div className="modalEditProfile-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
