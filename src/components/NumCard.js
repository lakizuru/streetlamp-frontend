function NumCard(title, value, type) {
    return(
        <div className="col-md-6 col-xl-3 mb-4">
                  <div className={type}>
                    <div className="card-body">
                      <div className="row align-items-center no-gutters">
                        <div className="col me-2">
                          <div className="text-uppercase text-primary fw-bold text-xs mb-1"><span>{title}</span></div>
                          <div className="text-dark fw-bold h5 mb-0"><span>{value}</span></div>
                        </div>
                        <div className="col-auto"><i className="fas fa-calendar fa-2x text-gray-300" /></div>
                      </div>
                    </div>
                  </div>
                </div>
    );
}

export default NumCard;