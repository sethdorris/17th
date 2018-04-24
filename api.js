exports.enlist = `INSERT INTO enlistments
(steam_name, steam_id, steam_url, game, reason, recruited_by, experience, previous_units, skills, help, microphone, attendance, additional, signature, term) VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING enlistmentid`;

exports.register = `INSERT INTO users
(steamid, steamname, password) VALUES ($1, $2, $3) RETURNING userid`;

exports.userExists = 'SELECT * FROM users WHERE steamid = $1 RETURNING userid';

exports.setUserToActive = 'UPDATE users SET status = 1 WHERE steamid = $1';

exports.getRoster = 'SELECT * FROM users JOIN member_status ON users.status = member_status.member_statusid JOIN ranks ON users.rankid = ranks.rankid WHERE users.status != 3';
