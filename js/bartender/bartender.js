module.exports = function(logger) {
    this.makeADrink = function(name) {
        logger.log("making a " + name);
        return 9.99;
    };
};
