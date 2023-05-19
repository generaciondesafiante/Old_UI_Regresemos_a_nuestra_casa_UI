import './ResourcesAndVerses.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export const ResourcesAndVerses = () => {
  return (
    <>
      <div className="resourcesAndVerses-container">
        <div className="resourcesAndVerses-content_bibleQuote">
          <p className="resourcesAndVerses-bibleQuote">
            “¡Con razón nuestro corazón ardía, mientras nos hablaba por el
            camino y <span>nos explicaba las Escrituras</span>!”
          </p>
          <p className="resourcesAndVerses-bibleQuote_number">LUCAS 24:32</p>
        </div>
        <div className="resourcesAndVerses-content_bibleQuoteTwo">
          <p className="resourcesAndVerses-bibleQuoteTwo">
            Las enseñanzas del Señor son perfectas,{' '}
            <span>reavivan el alma</span>. Los decretos del Señor son
            confiables; hacen sabio al sencillo
            <p className="resourcesAndVerses-bibleQuote_number-two">
              SALMO 19:7
            </p>
          </p>
        </div>
        <div className="resourcesAndVerses-content_memorize">
          <p className="resourcesAndVerses-memorize_title">
            Memoriza su palabra
          </p>
          <p>@desafianterecords</p>
          <p>
            <PlayCircleOutlineIcon sx={{ fontSize: 40 }} />
          </p>
        </div>
      </div>
    </>
  );
};
