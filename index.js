import jsonFile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const filePath = './data.json';
const git = simpleGit();

const makeCommit = (x, y) => {
    const date = moment().subtract(2, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format();
    const data = { date };

    jsonFile.writeFile(filePath, data, () => {
        git.add([filePath]).commit({ '--date': date }).push();
    });
};

// Example usage
makeCommit(1, 3);
