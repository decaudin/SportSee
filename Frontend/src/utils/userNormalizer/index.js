export class UserNormalizer {
    constructor(data) {
        this.data = data;
    }

    normalize() {
        const { score, todayScore, ...rest } = this.data;
        return {
            ...rest,
            todayScore: todayScore || score
        };
    }
}