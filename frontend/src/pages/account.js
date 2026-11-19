const FILES = [
    {id: 1, name: 'pdftest.pdf', type: 'PDF', size: '6.7 MB'},
    {id: 2, name: 'pngtest.png', type: 'Image', size: '6.9 MB'},
    {id: 3, name: 'tabletest.xlsx', type: 'Spreadsheet', size: '420 KB'},
  ];

function Account() {
    var accountName = "test";
    return (
        <div>
            <header className="Top-header">
                <h2 >Account: {accountName}</h2>
                <h3 >My Files:</h3>
            </header>

            <table className="file-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Size</th>
                        <th>File Page</th>
                    </tr>
                </thead>
                <tbody>
                    {FILES.map((file) => (
                    <tr key={file.id}>
                        <td>{file.name}</td>
                        <td>{file.type}</td>
                        <td>{file.size}</td>
                        <td>
                            <button>File Page</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Account;