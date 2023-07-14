import DefaultTranslator from '@modules/_shared/infrastructure/services/default-translator';
import ReactQQueryCreator from '../services/react-q-query-creator';
import ReactQueryMutationCreator from '../services/react-query-mutation-creator';
import FirebaseFileUploader from '../services/firebase-file-uploader';

const AppServiceProvider = {
    QueryCreator: new ReactQQueryCreator(),
    MutationCreator: new ReactQueryMutationCreator(),
    Translator: new DefaultTranslator(),
    FileUploader: new FirebaseFileUploader()
};

export default AppServiceProvider;
