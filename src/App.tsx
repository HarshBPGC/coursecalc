import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Alert,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

interface CourseData {
  id: number;
  courseName: string;
  pctScore: number;
  pctTotal: number;
  pctAverage: number;
  compreScore: number;
  compreTotal: number;
  compreAverage: number;
}

function App() {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [newCourse, setNewCourse] = useState<CourseData>({
    id: 0,
    courseName: '',
    pctScore: 0,
    pctTotal: 0,
    pctAverage: 0,
    compreScore: 0,
    compreTotal: 0,
    compreAverage: 0,
  });

  const calculateRecommendation = (course: CourseData) => {
    const pctPercentage = (course.pctScore / course.pctTotal) * 100;
    const comprePercentage = (course.compreScore / course.compreTotal) * 100;
    const pctAveragePercentage = (course.pctAverage / course.pctTotal) * 100;
    const compreAveragePercentage = (course.compreAverage / course.compreTotal) * 100;

    // Calculate how much better/worse you are compared to class average
    const pctVsAverage = pctPercentage - pctAveragePercentage;
    const compreVsAverage = comprePercentage - compreAveragePercentage;

    if (pctPercentage > comprePercentage) {
      return {
        choice: 'PCT',
        advantage: `Better by ${(pctPercentage - comprePercentage).toFixed(2)}%`,
        vsAverage: `You are ${pctVsAverage.toFixed(2)}% above class average`
      };
    } else if (comprePercentage > pctPercentage) {
      return {
        choice: 'Comprehensive',
        advantage: `Better by ${(comprePercentage - pctPercentage).toFixed(2)}%`,
        vsAverage: `You are ${compreVsAverage.toFixed(2)}% above class average`
      };
    } else {
      return {
        choice: 'Equal',
        advantage: 'Both options give same score',
        vsAverage: `You are ${pctVsAverage.toFixed(2)}% above PCT average and ${compreVsAverage.toFixed(2)}% above Compre average`
      };
    }
  };

  const handleAddCourse = () => {
    if (courses.length < 10) {
      setCourses([...courses, { ...newCourse, id: Date.now() }]);
      setNewCourse({
        id: 0,
        courseName: '',
        pctScore: 0,
        pctTotal: 0,
        pctAverage: 0,
        compreScore: 0,
        compreTotal: 0,
        compreAverage: 0,
      });
    }
  };

  const handleDeleteCourse = (id: number) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Course Option Calculator
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Add New Course
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
          <TextField
            label="Course Name"
            value={newCourse.courseName}
            onChange={(e) => setNewCourse({ ...newCourse, courseName: e.target.value })}
          />
          <TextField
            label="PCT Score"
            type="number"
            value={newCourse.pctScore}
            onChange={(e) => setNewCourse({ ...newCourse, pctScore: Number(e.target.value) })}
          />
          <TextField
            label="PCT Total"
            type="number"
            value={newCourse.pctTotal}
            onChange={(e) => setNewCourse({ ...newCourse, pctTotal: Number(e.target.value) })}
          />
          <TextField
            label="PCT Average"
            type="number"
            value={newCourse.pctAverage}
            onChange={(e) => setNewCourse({ ...newCourse, pctAverage: Number(e.target.value) })}
          />
          <TextField
            label="Compre Score"
            type="number"
            value={newCourse.compreScore}
            onChange={(e) => setNewCourse({ ...newCourse, compreScore: Number(e.target.value) })}
          />
          <TextField
            label="Compre Total"
            type="number"
            value={newCourse.compreTotal}
            onChange={(e) => setNewCourse({ ...newCourse, compreTotal: Number(e.target.value) })}
          />
          <TextField
            label="Compre Average"
            type="number"
            value={newCourse.compreAverage}
            onChange={(e) => setNewCourse({ ...newCourse, compreAverage: Number(e.target.value) })}
          />
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddCourse}
          disabled={courses.length >= 10}
          sx={{ mt: 2 }}
        >
          Add Course
        </Button>
      </Paper>

      {courses.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Course Name</TableCell>
                <TableCell>PCT Score</TableCell>
                <TableCell>PCT %</TableCell>
                <TableCell>PCT Avg %</TableCell>
                <TableCell>Compre Score</TableCell>
                <TableCell>Compre %</TableCell>
                <TableCell>Compre Avg %</TableCell>
                <TableCell>Recommendation</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>{course.courseName}</TableCell>
                  <TableCell>{course.pctScore}/{course.pctTotal}</TableCell>
                  <TableCell>{((course.pctScore / course.pctTotal) * 100).toFixed(2)}%</TableCell>
                  <TableCell>{((course.pctAverage / course.pctTotal) * 100).toFixed(2)}%</TableCell>
                  <TableCell>{course.compreScore}/{course.compreTotal}</TableCell>
                  <TableCell>{((course.compreScore / course.compreTotal) * 100).toFixed(2)}%</TableCell>
                  <TableCell>{((course.compreAverage / course.compreTotal) * 100).toFixed(2)}%</TableCell>
                  <TableCell>
                    <Alert severity={calculateRecommendation(course).choice === 'PCT' ? 'success' : 
                                   calculateRecommendation(course).choice === 'Comprehensive' ? 'info' : 'warning'}>
                      {calculateRecommendation(course).choice}
                      <br />
                      <small>{calculateRecommendation(course).advantage}</small>
                      <br />
                      <small>{calculateRecommendation(course).vsAverage}</small>
                    </Alert>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDeleteCourse(course.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}

export default App;
