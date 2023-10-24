function prime(number_) {
    if (number_ <= 1) return false;
    for (let index = 2; index < number_; index++) {
        if (number_ % index == 0) return false;
    }
    return true;
}
