import React, { useState } from 'react';
import './App.css';  // Importar los estilos
import { Alert, Button, Form } from 'react-bootstrap';

const App = () => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleCalculate = (e) => {
        e.preventDefault();
        setError('');
        setResult(null);

        if (a === '' || b === '' || c === '') {
            setError('Por favor, complete todos los campos.');
            return;
        }

        const numA = parseFloat(a);
        const numB = parseFloat(b);
        const numC = parseFloat(c);

        if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
            setError('Por favor, ingrese solo valores numéricos.');
            return;
        }

        const discriminant = Math.pow(numB, 2) - 4 * numA * numC;
        if (discriminant < 0) {
            setError('La ecuación no tiene soluciones reales.');
            return;
        }

        const root1 = (-numB + Math.sqrt(discriminant)) / (2 * numA);
        const root2 = (-numB - Math.sqrt(discriminant)) / (2 * numA);

        setResult({
            root1: root1.toFixed(2),
            root2: root2.toFixed(2)
        });
    };

    return (
        <div className="container mt-5">
            <h2>Calculadora de Fórmula Cuadrática</h2>
            <Form onSubmit={handleCalculate}>
                <Form.Group className="mb-3">
                    <Form.Label>Valor de a:</Form.Label>
                    <Form.Control
                        type="text"
                        value={a}
                        onChange={(e) => setA(e.target.value)}
                        placeholder="Ingrese el valor de A"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Valor de b:</Form.Label>
                    <Form.Control
                        type="text"
                        value={b}
                        onChange={(e) => setB(e.target.value)}
                        placeholder="Ingrese el valor de B"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Valor de c:</Form.Label>
                    <Form.Control
                        type="text"
                        value={c}
                        onChange={(e) => setC(e.target.value)}
                        placeholder="Ingrese el valor de C"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">Calcular</Button>
            </Form>

            {error && <Alert className="mt-3" variant="danger">{error}</Alert>}
            {result && (
                <Alert className="mt-3" variant="success">
                    <p>Soluciones:</p>
                    <p>x1 = {result.root1}</p>
                    <p>x2 = {result.root2}</p>
                </Alert>
            )}
        </div>
    );
};

export default App;
