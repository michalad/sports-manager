function calculateTable(matches) {
    let results = {};
    matches.forEach(function (match) {
        handlePoints(results, match);
        handlePlayedMatches(results, match);
        handleGoals(results, match);
    });

    let sortedResults = mapToSortedArray(results);
    handleGoalDifference(sortedResults);
    return sortedResults;
}

function handleGoalDifference(sortedResults) {
    sortedResults.forEach(function (result) {
        result.goalDifference = result.goalsFor - result.goalsAgainst;
    });
}

function mapToSortedArray(results) {
    return Object.keys(results).map(function(key) {
        return results[key];
    }).sort(function(first, second){
        // TODO sort by goals for
        return second.points - first.points;
    });
}


function handlePoints(results, match) {
    let firstTeamResult = getResultsForTeam(results, match.teamA.name);
    let secondTeamResult = getResultsForTeam(results, match.teamB.name);
    if (match.teamA.result > match.teamB.result) {
        firstTeamResult.points += 3;
        firstTeamResult.won += 1;
        secondTeamResult.loss += 1;
    } else if (match.teamA.result < match.teamB.result) {
        secondTeamResult.points += 3;
        firstTeamResult.loss += 1;
        secondTeamResult.won += 1;
    } else {
        firstTeamResult.points += 1;
        secondTeamResult.points += 1;
        firstTeamResult.draw += 1;
        secondTeamResult.draw += 1;
    }
}

function handleGoals(results, match) {
    let firstTeamResult = getResultsForTeam(results, match.teamA.name);
    let secondTeamResult = getResultsForTeam(results, match.teamB.name);
    let firstTeamGoals = match.teamA.result;
    let secondTeamGoals = match.teamB.result;

    firstTeamResult.goalsFor += firstTeamGoals;
    firstTeamResult.goalsAgainst += secondTeamGoals;

    secondTeamResult.goalsFor += secondTeamGoals;
    secondTeamResult.goalsAgainst += firstTeamGoals;

}

function handlePlayedMatches(results, match) {
    getResultsForTeam(results, match.teamA.name).played +=1;
    getResultsForTeam(results, match.teamB.name).played +=1;
}

function getResultsForTeam(results, teamName) {
    let resultsForTeam = results[teamName];
    if (resultsForTeam) {
        return resultsForTeam;
    } else {
        resultsForTeam = initialiseResults(teamName);
        results[teamName] = resultsForTeam;
        return resultsForTeam;
    }

}

function initialiseResults(teamName) {
    return {
        team: teamName,
        points: 0,
        played: 0,
        won: 0,
        draw: 0,
        loss: 0,
        goalsFor: 0,
        goalsAgainst: 0
    }
}

module.exports = {
    calculateTable: calculateTable
};