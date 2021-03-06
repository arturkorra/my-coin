import withAuth from "./withAuth";
import Footer from "../components/footer";
import Header from "../components/header";

function Notifications(){
    return<>
    <Header></Header>
    <main className="main-content">
    <div className="container">
        <div className="notification-item">
            <h4 className="main-title py-4">Notifications</h4>
            <div className="notification-list">
                <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                        <svg  fill="currentColor" width="25" height="25"
                             viewBox="0 0 512 512"
                             xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="m459.669 82.906-196-81.377c-4.91-2.038-10.429-2.039-15.338 0l-196 81.377c-7.465 3.1-12.331 10.388-12.331 18.471v98.925c0 136.213 82.329 258.74 208.442 310.215 4.844 1.977 10.271 1.977 15.116 0 126.111-51.474 208.442-174.001 208.442-310.215v-98.925c0-8.083-4.865-15.371-12.331-18.471zm-27.669 117.396c0 115.795-68 222.392-176 269.974-105.114-46.311-176-151.041-176-269.974v-85.573l176-73.074 176 73.074zm-198.106 67.414 85.964-85.963c7.81-7.81 20.473-7.811 28.284 0s7.81 20.474-.001 28.284l-100.105 100.105c-7.812 7.812-20.475 7.809-28.284 0l-55.894-55.894c-7.811-7.811-7.811-20.474 0-28.284s20.474-7.811 28.284 0z"/>
                            </g>
                        </svg>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1 fs-16">Verify your account</h5>
                        <span className="text-gray fs-12">28 March  12:32pm</span>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                        <svg version="1.1"  fill="currentColor" width="25" height="25"
                             xmlns="http://www.w3.org/2000/svg"
                             x="0px"
                             y="0px"
                             viewBox="0 0 512 512" style={{enableBackground:'new 0 0 512 512'}}
                             xmlSpace="preserve">
<path d="M312.942,424.774L276,461.28V276c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v183.303l-34.942-34.529
				c-7.857-7.764-20.52-7.688-28.284,0.168c-7.764,7.857-7.688,20.52,0.168,28.284l41.589,41.098
				C225.878,505.724,240.955,512,257,512s31.122-6.276,42.469-17.676l41.589-41.098c7.856-7.764,7.932-20.427,0.168-28.284
				C333.461,417.085,320.799,417.009,312.942,424.774z"/>
                            <path d="M492,276c-11.046,0-20,8.954-20,20c0,22.056-17.944,40-40,40h-96c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h96
				c44.112,0,80-35.888,80-80C512,284.954,503.046,276,492,276z"/>
                            <path d="M311.172,253.815c3.35,2.157,7.101,3.188,10.809,3.187c6.573,0,13.011-3.237,16.834-9.174
				C350.712,229.354,357,208.277,357,186.878c0-59.551-45.309-108-101-108c-55.691,0-101,48.449-101,108
				c0,22.906,5.798,43.438,17.233,61.024c6.021,9.26,18.41,11.886,27.669,5.865c9.26-6.021,11.886-18.409,5.865-27.669
				C198.623,215.109,195,201.915,195,186.878c0-37.495,27.364-68,61-68s61,30.505,61,68c0,13.702-4.085,27.29-11.815,39.293
				C299.205,235.459,301.885,247.835,311.172,253.815z"/>
                            <circle cx="415" cy="187" r="20"/>
                            <circle cx="97" cy="187" r="20"/>
                            <path d="M432,0H80C35.888,0,0,35.888,0,80v216c0,44.112,35.888,80,80,80h96c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H80
				c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h352c22.056,0,40,17.944,40,40v116c0,11.046,8.954,20,20,20
				c11.046,0,20-8.954,20-20V80C512,35.888,476.112,0,432,0z"/>
                            </svg>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1 fs-16">Withdrawal Confirmation Successful</h5>
                        <span className="text-gray fs-12">26 March 12:42pm</span>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="25" height="25"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="m21 3h-18c-1.65 0-3 1.35-3 3v12c0 1.65 1.35 3 3 3h6.76c-.29-.63-.5-1.3-.62-2h-6.14c-.55 0-1-.45-1-1v-12c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v4.29c.76.47 1.43 1.06 2 1.73v-6.02c0-1.65-1.35-3-3-3z"/>
                            <path d="m7.25 8h-6c-.414 0-.75.336-.75.75v6.5c0 .414.336.75.75.75h6c1.517 0 2.75-1.233 2.75-2.75v-2.5c0-1.517-1.233-2.75-2.75-2.75zm-1.25 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"/>
                            <path d="m17.5 11c-3.584 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5zm-.125 5.75h.25c1.034 0 1.875.841 1.875 1.875 0 .813-.524 1.501-1.25 1.76v.365c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-.25h-.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.375c.207 0 .375-.168.375-.375s-.168-.375-.375-.375h-.25c-1.034 0-1.875-.841-1.875-1.875 0-.813.524-1.501 1.25-1.76v-.365c0-.414.336-.75.75-.75s.75.336.75.75v.25h.5c.414 0 .75.336.75.75s-.336.75-.75.75h-1.375c-.207 0-.375.168-.375.375s.168.375.375.375z"/>
                        </svg>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1 fs-16">Deposit Successful</h5>
                        <span className="text-gray fs-12">24 March 12:45pm</span>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                        <svg version="1.1" fill="currentColor" width="25" height="25"
                             xmlns="http://www.w3.org/2000/svg" x="0px"
                             y="0px"
                             viewBox="0 0 477.867 477.867" style={{enableBackground:'new 0 0 477.867 477.867'}}
                             xmlSpace="preserve">
                                	<path d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933
                                    C477.726,107.033,370.834,0.141,238.933,0z M238.933,443.733c-113.108,0-204.8-91.692-204.8-204.8s91.692-204.8,204.8-204.8
                                    s204.8,91.692,204.8,204.8C443.611,351.991,351.991,443.611,238.933,443.733z"/>
                            <path d="M370.046,141.534c-6.614-6.388-17.099-6.388-23.712,0v0L187.733,300.134l-56.201-56.201
                                c-6.548-6.78-17.353-6.967-24.132-0.419c-6.78,6.548-6.967,17.353-0.419,24.132c0.137,0.142,0.277,0.282,0.419,0.419
                                l68.267,68.267c6.664,6.663,17.468,6.663,24.132,0l170.667-170.667C377.014,158.886,376.826,148.082,370.046,141.534z"/>
                            </svg>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1 fs-16">Successful Login Form</h5>
                        <span className="text-gray fs-12">22 March 12:42pm</span>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                        <svg version="1.1"  fill="currentColor" width="25" height="25"
                             xmlns="http://www.w3.org/2000/svg" x="0px"
                             y="0px"
                             viewBox="0 0 512 512" style={{enableBackground:'new 0 0 512 512'}} xmlSpace="preserve">
                                		<path d="M499.521,92.982H381.486c12.951-19.021,14.201-44.702,1.13-65.343C365.075-0.063,328.253-8.333,300.552,9.208
			c-7.01,4.44-18.711,14.821-39.292,53.532c-1.84,3.47-3.6,6.87-5.26,10.14c-1.66-3.27-3.42-6.67-5.26-10.14
			c-20.581-38.712-32.281-49.092-39.292-53.532c-27.701-17.541-64.523-9.27-82.064,18.431c-8.5,13.421-11.261,29.351-7.78,44.852
			c1.67,7.45,4.69,14.371,8.87,20.491H12.479v145.216H30.02V512h451.96V238.198h17.541L499.521,92.982L499.521,92.982z
			 M316.593,34.56c4.78-3.03,10.2-4.58,15.721-4.58c2.16,0,4.35,0.24,6.51,0.72c7.68,1.73,14.231,6.34,18.451,12.991
			c8.69,13.731,4.59,31.981-9.14,40.672c-8.26,5.24-38.542,8.16-68.693,8.61C292.742,65.91,308.333,39.79,316.593,34.56z
			 M154.726,43.689c4.22-6.65,10.771-11.26,18.451-12.991c2.16-0.48,4.35-0.72,6.51-0.72c5.52,0,10.94,1.55,15.721,4.58
			c8.26,5.23,23.851,31.351,37.152,58.413c-15.071-0.23-30.181-1.07-42.552-2.51c-12.371-1.44-22.011-3.48-26.141-6.1
			c-6.65-4.21-11.271-10.76-12.991-18.441C149.145,58.24,150.515,50.34,154.726,43.689z M195.297,481.999H60.021V238.198h135.276
			V481.999z M195.297,208.197H42.481v-85.214h152.817V208.197z M286.702,481.999h-61.403V122.983h61.403V481.999z M451.979,481.999
			L451.979,481.999H316.703V238.198h135.276V481.999z M469.52,208.197H316.703v-85.214H469.52V208.197z"/>
                            </svg>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1 fs-16">Ready to be successful trader</h5>
                        <span className="text-gray fs-12">20 March 12:22pm</span>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="25" height="25"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="m21 3h-18c-1.65 0-3 1.35-3 3v12c0 1.65 1.35 3 3 3h6.76c-.29-.63-.5-1.3-.62-2h-6.14c-.55 0-1-.45-1-1v-12c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v4.29c.76.47 1.43 1.06 2 1.73v-6.02c0-1.65-1.35-3-3-3z"/>
                            <path d="m7.25 8h-6c-.414 0-.75.336-.75.75v6.5c0 .414.336.75.75.75h6c1.517 0 2.75-1.233 2.75-2.75v-2.5c0-1.517-1.233-2.75-2.75-2.75zm-1.25 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"/>
                            <path d="m17.5 11c-3.584 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5zm-.125 5.75h.25c1.034 0 1.875.841 1.875 1.875 0 .813-.524 1.501-1.25 1.76v.365c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-.25h-.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.375c.207 0 .375-.168.375-.375s-.168-.375-.375-.375h-.25c-1.034 0-1.875-.841-1.875-1.875 0-.813.524-1.501 1.25-1.76v-.365c0-.414.336-.75.75-.75s.75.336.75.75v.25h.5c.414 0 .75.336.75.75s-.336.75-.75.75h-1.375c-.207 0-.375.168-.375.375s.168.375.375.375z"/>
                        </svg>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1 fs-16">Deposit Successful</h5>
                        <span className="text-gray fs-12">20 March 12:32pm</span>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                        <svg  fill="currentColor" width="25" height="25"
                             viewBox="0 0 512 512"
                             xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="m459.669 82.906-196-81.377c-4.91-2.038-10.429-2.039-15.338 0l-196 81.377c-7.465 3.1-12.331 10.388-12.331 18.471v98.925c0 136.213 82.329 258.74 208.442 310.215 4.844 1.977 10.271 1.977 15.116 0 126.111-51.474 208.442-174.001 208.442-310.215v-98.925c0-8.083-4.865-15.371-12.331-18.471zm-27.669 117.396c0 115.795-68 222.392-176 269.974-105.114-46.311-176-151.041-176-269.974v-85.573l176-73.074 176 73.074zm-198.106 67.414 85.964-85.963c7.81-7.81 20.473-7.811 28.284 0s7.81 20.474-.001 28.284l-100.105 100.105c-7.812 7.812-20.475 7.809-28.284 0l-55.894-55.894c-7.811-7.811-7.811-20.474 0-28.284s20.474-7.811 28.284 0z"/>
                            </g>
                        </svg>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1 fs-16">Verify your Email</h5>
                        <span className="text-gray fs-12">18 March  12:15pm</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<Footer></Footer>
</>
}
export default withAuth(Notifications);