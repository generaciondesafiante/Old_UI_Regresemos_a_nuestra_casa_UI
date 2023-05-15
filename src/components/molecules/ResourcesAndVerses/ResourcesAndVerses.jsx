import './ResourcesAndVerses.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export const ResourcesAndVerses = () => {
  return (
    <>
      <div className="resources-content-bibleQuote">
        <div className="resources-subcontent_bibleQuote">
          <p className="resources-bibleQuote">
            “¡Con razón nuestro corazón ardía, mientras nos hablaba por el
            camino y <span>nos explicaba las Escrituras</span>!”
          </p>
          <p className="resources-bibleQuote_number">LUCAS 24:32</p>
        </div>
        <div className="resources-subcontent_bibleQuoteTwo">
          <p className="resources-bibleQuoteTwo">
            Las enseñanzas del Señor son perfectas,{' '}
            <span>reavivan el alma</span>. Los decretos del Señor son
            confiables; hacen sabio al sencillo
            <p className="resources-bibleQuote_number-two">SALMO 19:7</p>
          </p>
        </div>
        <div className="resources-content_memorize">
          <p className="resources-memorize_title">Memoriza su palabra</p>
          <p>@desafianterecords</p>
          <p>
            <PlayCircleOutlineIcon sx={{ fontSize: 40 }} />
          </p>
        </div>
      </div>
    </>
  );
};
