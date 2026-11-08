package com.vishnupriyahospital.korutla.ui.screens

import android.content.Intent
import android.net.Uri
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.vishnupriyahospital.korutla.ui.theme.EmergencyRed

@Composable
fun HomeScreen(
    isTelugu: Boolean,
    onNavigateToTimings: () -> Unit,
    onNavigateToDoctors: () -> Unit,
    onNavigateToServices: () -> Unit,
    onNavigateToEmergency: () -> Unit,
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background),
        contentPadding = PaddingValues(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        // 1. Emergency Trauma Banner Card
        item {
            Card(
                colors = CardDefaults.cardColors(containerColor = EmergencyRed),
                shape = RoundedCornerShape(16.dp),
                modifier = Modifier
                    .fillMaxWidth()
                    .clickable { onNavigateToEmergency() }
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Box(
                        modifier = Modifier
                            .size(48.dp)
                            .background(Color.White, CircleShape),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(
                            imageVector = Icons.Default.Emergency,
                            contentDescription = "Emergency",
                            tint = EmergencyRed,
                            modifier = Modifier.size(30.dp)
                        )
                    }
                    Spacer(modifier = Modifier.width(14.dp))
                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            text = if (isTelugu) "24x7 అత్యవసర & ట్రామా కేర్" else "24x7 Emergency & Trauma Care",
                            style = MaterialTheme.typography.titleMedium.copy(
                                color = Color.White,
                                fontWeight = FontWeight.Bold
                            )
                        )
                        Text(
                            text = if (isTelugu) "ఎముకల శస్త్రచికిత్స & అత్యవసర వైద్యం" else "On-call Orthopaedic Trauma Care",
                            style = MaterialTheme.typography.bodySmall.copy(color = Color.White.copy(alpha = 0.9f))
                        )
                    }
                    Button(
                        onClick = {
                            val intent = Intent(Intent.ACTION_DIAL, Uri.parse("tel:09515574014"))
                            context.startActivity(intent)
                        },
                        colors = ButtonDefaults.buttonColors(
                            containerColor = Color.White,
                            contentColor = EmergencyRed
                        ),
                        contentPadding = PaddingValues(horizontal = 12.dp, vertical = 6.dp)
                    ) {
                        Icon(Icons.Default.Call, contentDescription = "Call", modifier = Modifier.size(16.dp))
                        Spacer(modifier = Modifier.width(4.dp))
                        Text(if (isTelugu) "కాల్" else "CALL", fontWeight = FontWeight.Bold)
                    }
                }
            }
        }

        // 2. Hospital Welcome & Hero Card (Orthopaedic & Dental)
        item {
            ElevatedCard(
                shape = RoundedCornerShape(20.dp),
                colors = CardDefaults.elevatedCardColors(containerColor = MaterialTheme.colorScheme.surface),
                elevation = CardDefaults.elevatedCardElevation(defaultElevation = 2.dp),
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(modifier = Modifier.padding(20.dp)) {
                    Surface(
                        shape = RoundedCornerShape(8.dp),
                        color = MaterialTheme.colorScheme.primaryContainer,
                        modifier = Modifier.padding(bottom = 10.dp)
                    ) {
                        Text(
                            text = "KORUTLA • TELANGANA",
                            style = MaterialTheme.typography.labelSmall.copy(
                                fontWeight = FontWeight.Bold,
                                color = MaterialTheme.colorScheme.primary
                            ),
                            modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                        )
                    }
                    Text(
                        text = if (isTelugu) "విష్ణు ప్రియ హాస్పిటల్ & డెంటల్ క్లినిక్" else "Vishnu Priya Hospital",
                        style = MaterialTheme.typography.headlineSmall.copy(
                            fontWeight = FontWeight.Bold,
                            color = MaterialTheme.colorScheme.onSurface
                        )
                    )
                    Text(
                        text = if (isTelugu)
                            "కోరుట్లలో ప్రముఖ ఆర్థోపెడిక్స్ & జాయింట్ రీప్లేస్‌మెంట్ (డాక్టర్ నరేష్) మరియు అధునాతన దంత వైద్య సంరక్షణ (డాక్టర్ అర్చన, BDS)."
                        else
                            "Advanced Orthopaedic, Joint Replacement & Trauma Care under Dr. Naresh, and Comprehensive Dental Care under Dr. Archana, BDS.",
                        style = MaterialTheme.typography.bodyMedium.copy(
                            color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.8f),
                            lineHeight = 20.sp
                        ),
                        modifier = Modifier.padding(top = 6.dp, bottom = 12.dp)
                    )

                    // Walk-in badge
                    Surface(
                        shape = RoundedCornerShape(8.dp),
                        color = MaterialTheme.colorScheme.surfaceVariant,
                        modifier = Modifier.fillMaxWidth().padding(bottom = 14.dp)
                    ) {
                        Row(modifier = Modifier.padding(10.dp), verticalAlignment = Alignment.CenterVertically) {
                            Icon(Icons.Default.Info, contentDescription = null, tint = MaterialTheme.colorScheme.primary, modifier = Modifier.size(16.dp))
                            Spacer(modifier = Modifier.width(8.dp))
                            Text(
                                text = if (isTelugu) "ఆన్‌లైన్ బుకింగ్స్ లేవు • నేరుగా రిసెప్షన్ వద్ద ఓపీ రిజిస్ట్రేషన్" else "Walk-in Consultations Only • Direct Registration at Reception",
                                style = MaterialTheme.typography.labelSmall.copy(fontWeight = FontWeight.Medium)
                            )
                        }
                    }

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(10.dp)
                    ) {
                        Button(
                            onClick = onNavigateToTimings,
                            modifier = Modifier.weight(1f),
                            shape = RoundedCornerShape(12.dp)
                        ) {
                            Icon(Icons.Default.Schedule, contentDescription = null, modifier = Modifier.size(18.dp))
                            Spacer(modifier = Modifier.width(6.dp))
                            Text(if (isTelugu) "ఓపీ వేళలు" else "OP Timings")
                        }
                        OutlinedButton(
                            onClick = onNavigateToDoctors,
                            modifier = Modifier.weight(1f),
                            shape = RoundedCornerShape(12.dp)
                        ) {
                            Text(if (isTelugu) "మా వైద్యులు" else "Our Doctors")
                        }
                    }
                }
            }
        }

        // 3. Quick Action Grid
        item {
            Text(
                text = if (isTelugu) "త్వరిత సేవలు" else "Quick Actions",
                style = MaterialTheme.typography.titleMedium.copy(fontWeight = FontWeight.Bold)
            )
            Spacer(modifier = Modifier.height(10.dp))
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                QuickActionItem(
                    title = if (isTelugu) "డాక్టర్లు" else "Doctors",
                    icon = Icons.Default.Person,
                    color = MaterialTheme.colorScheme.primary,
                    onClick = onNavigateToDoctors,
                    modifier = Modifier.weight(1f)
                )
                QuickActionItem(
                    title = if (isTelugu) "విభాగాలు" else "Services",
                    icon = Icons.Default.LocalHospital,
                    color = MaterialTheme.colorScheme.secondary,
                    onClick = onNavigateToServices,
                    modifier = Modifier.weight(1f)
                )
                QuickActionItem(
                    title = if (isTelugu) "సమయాలు" else "Timings",
                    icon = Icons.Default.Schedule,
                    color = MaterialTheme.colorScheme.tertiary,
                    onClick = onNavigateToTimings,
                    modifier = Modifier.weight(1f)
                )
                QuickActionItem(
                    title = if (isTelugu) "లొకేషన్" else "Location",
                    icon = Icons.Default.Place,
                    color = EmergencyRed,
                    onClick = onNavigateToEmergency,
                    modifier = Modifier.weight(1f)
                )
            }
        }

        // 4. Two Doctors Spotlight
        item {
            Text(
                text = if (isTelugu) "మా వైద్యులు (Consultants)" else "Our Doctors",
                style = MaterialTheme.typography.titleMedium.copy(fontWeight = FontWeight.Bold)
            )
            Spacer(modifier = Modifier.height(10.dp))

            Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                // Dr. Naresh
                Card(
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                    shape = RoundedCornerShape(14.dp),
                    modifier = Modifier.fillMaxWidth().clickable { onNavigateToDoctors() }
                ) {
                    Row(modifier = Modifier.padding(14.dp), verticalAlignment = Alignment.CenterVertically) {
                        Surface(shape = CircleShape, color = MaterialTheme.colorScheme.primaryContainer, modifier = Modifier.size(44.dp)) {
                            Box(contentAlignment = Alignment.Center) {
                                Icon(Icons.Default.MedicalServices, contentDescription = null, tint = MaterialTheme.colorScheme.primary)
                            }
                        }
                        Spacer(modifier = Modifier.width(12.dp))
                        Column(modifier = Modifier.weight(1f)) {
                            Text(if (isTelugu) "డాక్టర్ నరేష్" else "Dr. Naresh", fontWeight = FontWeight.Bold, fontSize = 14.sp)
                            Text("MBBS, MS (Orthopaedics), FIJR", fontSize = 11.sp, color = MaterialTheme.colorScheme.primary)
                            Text(if (isTelugu) "ఆర్థోపెడిక్ సర్జన్ & జాయింట్ రీప్లేస్‌మెంట్" else "Senior Orthopaedic & Joint Replacement Surgeon", fontSize = 11.sp, color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f))
                        }
                        Icon(Icons.Default.ChevronRight, contentDescription = null, tint = MaterialTheme.colorScheme.outline)
                    }
                }

                // Dr. Archana, BDS
                Card(
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                    shape = RoundedCornerShape(14.dp),
                    modifier = Modifier.fillMaxWidth().clickable { onNavigateToDoctors() }
                ) {
                    Row(modifier = Modifier.padding(14.dp), verticalAlignment = Alignment.CenterVertically) {
                        Surface(shape = CircleShape, color = MaterialTheme.colorScheme.secondaryContainer, modifier = Modifier.size(44.dp)) {
                            Box(contentAlignment = Alignment.Center) {
                                Icon(Icons.Default.Mood, contentDescription = null, tint = MaterialTheme.colorScheme.secondary)
                            }
                        }
                        Spacer(modifier = Modifier.width(12.dp))
                        Column(modifier = Modifier.weight(1f)) {
                            Text(if (isTelugu) "డాక్టర్ అర్చన" else "Dr. Archana", fontWeight = FontWeight.Bold, fontSize = 14.sp)
                            Text("BDS (Bachelor of Dental Surgery)", fontSize = 11.sp, color = MaterialTheme.colorScheme.secondary)
                            Text(if (isTelugu) "దంత వైద్య నిపుణులు (డెంటల్ సర్జన్)" else "Dental Surgeon & Oral Health Specialist", fontSize = 11.sp, color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f))
                        }
                        Icon(Icons.Default.ChevronRight, contentDescription = null, tint = MaterialTheme.colorScheme.outline)
                    }
                }
            }
        }

        // 5. Testimonial Card
        item {
            Card(
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.5f)
                ),
                shape = RoundedCornerShape(16.dp),
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        repeat(5) {
                            Icon(Icons.Default.Star, contentDescription = null, tint = Color(0xFFF59E0B), modifier = Modifier.size(16.dp))
                        }
                        Spacer(modifier = Modifier.width(8.dp))
                        Text("Patient Trust (Korutla)", style = MaterialTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold))
                    }
                    Spacer(modifier = Modifier.height(8.dp))
                    Text(
                        text = "\"Exceptional care by Dr. Naresh for knee treatment and Dr. Archana for gentle dental care. Best hospital in Korutla with immediate attention.\"",
                        style = MaterialTheme.typography.bodySmall.copy(fontStyle = androidx.compose.ui.text.font.FontStyle.Italic)
                    )
                }
            }
        }
    }
}

@Composable
fun QuickActionItem(
    title: String,
    icon: ImageVector,
    color: Color,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Card(
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
        shape = RoundedCornerShape(14.dp),
        modifier = modifier.clickable { onClick() }
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 14.dp, horizontal = 4.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Box(
                modifier = Modifier
                    .size(42.dp)
                    .background(color.copy(alpha = 0.12f), CircleShape),
                contentAlignment = Alignment.Center
            ) {
                Icon(icon, contentDescription = title, tint = color, modifier = Modifier.size(22.dp))
            }
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = title,
                style = MaterialTheme.typography.labelSmall.copy(fontWeight = FontWeight.Medium),
                maxLines = 1
            )
        }
    }
}
