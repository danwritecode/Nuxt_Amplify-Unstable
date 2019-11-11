import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: 'us-east-2', // REQUIRED - Amazon Cognito Region
        userPoolId: 'us-east-2_zuSFuCFDA', //OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: '6eiobu6iar3lv7cofnstf652de', //OPTIONAL -
    }
});
