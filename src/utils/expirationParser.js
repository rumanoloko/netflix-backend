export function parseExpiration(exp) {
    const unit = exp.slice(-1);
    const value = parseInt(exp.slice(0, -1));
    switch (unit) {
        case 'd': return value * 24 * 60 * 60 * 1000;
        case 'h': return value * 60 * 60 * 1000;
        case 'm': return value * 60 * 1000;
        default: return value * 1000;
    }
}
